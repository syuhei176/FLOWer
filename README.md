logic-on-canvas
===============

#HOW TO START

node app.js

#GRAMMAR

Diagram  
has many jobs.  

Job  
has many ports as inputs.  
has many ports as outputs.  

Port
has many connections as srcConnections.  
has name property.  
has type property.  

Connection
has a port as target.  
has a port as source.  

Entry is Job.  
Actuator is Job.  
Logic is Job.  
Memory is Job.  

Constant Value

