logic-on-canvas
===============

#HOW TO INSTALL

```
npm install
```


#HOW TO START

```
npm start
```

#raspberry pi
##install qemu
brew install qemu --target-list=arm-softmmu
##run qemu
qemu-system-arm -M versatilepb -cpu arm1136 -m 256 -kernel kernel-qemu -hda 2012-07-15-wheezy-raspbian.img -append "root=/dev/sda2" -redir tcp:10022::22

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


