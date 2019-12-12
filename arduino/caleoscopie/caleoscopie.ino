const int buttonPin = 2;    
const int ledPin = 13;     
int buttonState = 0;            

boolean buttonDownOnce = false;


void setup() {
  Serial.begin(9600);
  pinMode(buttonPin, INPUT);
}


void loop() {
  
  buttonState = digitalRead(buttonPin);
  
  if(buttonState == HIGH) {
    //Serial.print("hello");
    buttonDownOnce= true;
  
  }

  if(buttonState == LOW) {

    if (buttonDownOnce == true) {
      Serial.println ("button click");
       buttonDownOnce = false;
    }
    
  }
}
