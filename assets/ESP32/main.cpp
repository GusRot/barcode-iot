#include <WiFi.h>
#include <ArduinoHA.h>

#define WIFI_SSID       "Wokwi-GUEST"
#define WIFI_PASSWORD   ""

#define MQTT_HOST       IPAddress(10, 1, 0, 110)
#define MQTT_USER       "grotta"
#define MQTT_PASS       "admin123"

#define LED_D1  2
#define LED_D2  4
#define LED_D3  5

WiFiClient  net;
HADevice    device("esp32_portoes");
HAMqtt      mqtt(net, device);

HASwitch    swD1("door_d1");
HASwitch    swD2("door_d2");
HASwitch    swD3("door_d3");

void onDoorCmd(bool state, uint8_t pin, HASwitch* sw) {
  digitalWrite(pin, state ? HIGH : LOW);
  sw->setState(state);
}

void cbD1(bool s, HASwitch* _) { onDoorCmd(s, LED_D1, &swD1); }
void cbD2(bool s, HASwitch* _) { onDoorCmd(s, LED_D2, &swD2); }
void cbD3(bool s, HASwitch* _) { onDoorCmd(s, LED_D3, &swD3); }

void setup() {
  Serial.begin(115200);
  pinMode(LED_D1, OUTPUT);
  pinMode(LED_D2, OUTPUT);
  pinMode(LED_D3, OUTPUT);

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  while (WiFi.status() != WL_CONNECTED) { delay(300); }

  device.setName("ESP32 Portões");
  device.enableSharedAvailability();

  swD1.setName("Portão D1");
  swD2.setName("Portão D2");
  swD3.setName("Portão D3");

  swD1.onCommand(cbD1);
  swD2.onCommand(cbD2);
  swD3.onCommand(cbD3);

  mqtt.begin(MQTT_HOST, MQTT_USER, MQTT_PASS);
}

void loop() {
  mqtt.loop();
}
