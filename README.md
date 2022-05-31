# Event Binding
## INPUT / OUTPUT: MAIN IDEA - EXCHNAGE DATA BETWEEN COMOPONENTS!

form doc:
- Event binding lets you listen for and respond to user actions such as keystrokes, mouse movements, clicks, and touches.

Input is used to receive data in whereas Output is used to send data out. Output sends data out by exposing event producers, usually EventEmitter objects.

@Input and @Output Decorators are parts of the @angular/core.

@Input decorator binds a property within one component (child component) to receive a value from another component (parent component). This is one way communication from parent to child.

@Output decorator binds a property of a component to send data from one component (child component) to calling component (parent component). This is one way communication from child to parent component.