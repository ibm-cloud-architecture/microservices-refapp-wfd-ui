# Microservices Reference Application - What's For Dinner

## User Interface Service - MicroProfile

This repository contains the **Java MicroProfile** implementation of the **UI Service** which is a part of microservice-based reference application called **What's For Dinner** that can be found in https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd

<p align="center">
  <a href="https://microprofile.io/">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/microprofile_small.png">
  </a>
</p>

### Introduction

This project demonstrates the implementation of UI Microservice. The UI microservice interacts with the [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) microservices and displays the front end. 

- Based on [Angular 4](https://angular.io/).
- Used [MicroProfile](https://microprofile.io/).
- Integrated with the [MicroService Builder](https://developer.ibm.com/microservice-builder/).
- Deployment options for local, Docker Container-based runtimes, Minikube environment and ICP/BMX.

### How it works

UI Microservice serves [**What's For Dinner**](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd), Microservice-based reference application. Though it is a part of a bigger application, UI service is itself an application in turn that displays the front end for the [**What's For Dinner**](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd) application. This service interacts with the backend [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) service and displays the menu on the user interface.

#### Pre-requisite

For the UI microservice to work, [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) microservice along with its downstream services [Appetizer](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-appetizer/tree/microprofile), [Dessert](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-dessert/tree/microprofile) and [Entree](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-entree/tree/microprofile) must be running.

### Endpoints

```
GET     /WfdFrontEnd/rest/health/        # Health check of the service
```

### Implementation

#### [MicroProfile](https://microprofile.io/)

MicroProfile is an open platform that optimizes the Enterprise Java for microservices architecture. In this application, we are using [**MicroProfile 1.2**](https://github.com/eclipse/microprofile-bom). This includes

- MicroProfile 1.0 ([JAX-RS 2.0](https://jcp.org/en/jsr/detail?id=339), [CDI 1.2](https://jcp.org/en/jsr/detail?id=346), and [JSON-P 1.0](https://jcp.org/en/jsr/detail?id=353))
- MicroProfile 1.1 (MicroProfile 1.0, [MicroProfile Config 1.0.](https://github.com/eclipse/microprofile-config))
- [MicroProfile Config 1.1](https://github.com/eclipse/microprofile-config) (supercedes MicroProfile Config 1.0), [MicroProfile Fault Tolerance 1.0](https://github.com/eclipse/microprofile-fault-tolerance), [MicroProfile Health Check 1.0](https://github.com/eclipse/microprofile-health), [MicroProfile Metrics 1.0](https://github.com/eclipse/microprofile-metrics), [MicroProfile JWT Authentication 1.0](https://github.com/eclipse/microprofile-jwt-auth).

You can make use of this feature by including this dependency in Maven.

```
<dependency>
<groupId>org.eclipse.microprofile</groupId>
<artifactId>microprofile</artifactId>
<version>1.2</version>
<type>pom</type>
<scope>provided</scope>
</dependency>
```

You should also include a feature in [server.xml](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-ui/blob/microprofile/src/main/liberty/config/server.xml).

```
<server description="Sample Liberty server">

  <featureManager>
      <feature>microprofile-1.2</feature>
  </featureManager>

  <httpEndpoint httpPort="${default.http.port}" httpsPort="${default.https.port}"
      id="defaultHttpEndpoint" host="*" />

</server>
```

#### Maven build

Maven is a project management tool that is based on the Project Object Model (POM). Typically, people use Maven for project builds, dependencies, and documentation. Maven simplifies the project build. In this task, you use Maven to build the project.

For Liberty, there is nice tool called [Liberty Accelerator](https://liberty-app-accelerator.wasdev.developer.ibm.com/start/) that generates a simple project based upon your configuration. Using this, you can build and deploy to Liberty either using the Maven or Gradle build. 

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/LibertyAcc_Home.png">
</p>

Just check the options of your choice and click Generate project. You can either Download it as a zip or you can create git project.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/LibertyAcc_PrjGen.png">
</p>

Once you are done with this, you will have a sample microprofile based application that you can deploy on Liberty.

If you are using Liberty accelerator, look for the generated POM. It may contain unwanted dependencies. Please remove accordingly.

For our application, the following are the required dependencies which are the part of auto-generated POM. Please remove the rest of the dependencies.

```
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>4.12</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.apache.cxf</groupId>
    <artifactId>cxf-rt-rs-client</artifactId>
    <version>3.1.11</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.glassfish</groupId>
    <artifactId>javax.json</artifactId>
    <version>1.0.4</version>
    <scope>test</scope>
</dependency>
```

Using Liberty Accelerator is your choice. You can also create the entire project manually, but using Liberty Accelerator will make things easier.

To make use of MicroProfile 1.2, include the below dependency in your POM.

```
<dependency>
    <groupId>org.eclipse.microprofile</groupId>
    <artifactId>microprofile</artifactId>
    <version>1.2</version>
    <type>pom</type>
    <scope>provided</scope>
</dependency>
```

If you want to enable Zipkin OpenTracing feature, please include the below dependency in your POM.

```
<dependency>
    <groupId>net.wasdev.wlp.tracer</groupId>
    <artifactId>liberty-opentracing-zipkintracer</artifactId>
    <version>1.0</version>
    <type>jar</type>
    <scope>provided</scope>
</dependency>
```

If you are planning to include zipkin tracer in your application, please add the below feature to your [server.xml](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/blob/microprofile/src/main/liberty/config/server.xml).

```
<feature>opentracingZipkin-0.30</feature>
```

##### Running the application locally using Maven Build

1. Clone this repository.

   `git clone https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-ui.git`

2. Checkout MicroProfile branch.

   `git checkout microprofile`

3. `cd refarch-cloudnative-wfd-ui/`

4. Run this command. This command builds the project and installs it.

   `mvn install`

   If this runs successfully, you will be able to see the below messages.
   
```
[INFO] --- maven-failsafe-plugin:2.18.1:verify (verify-results) @ WfdFrontEnd ---
[INFO] Failsafe report directory: /Users/Hemankita.Perabathini@ibm.com/PurpleCompute/Microprofile/WhatsForDinner/refarch-cloudnative-wfd-ui/target/test-reports/it
[INFO] 
[INFO] --- maven-install-plugin:2.4:install (default-install) @ WfdFrontEnd ---
[INFO] Installing /Users/Hemankita.Perabathini@ibm.com/PurpleCompute/Microprofile/WhatsForDinner/refarch-cloudnative-wfd-ui/target/WfdFrontEnd-1.0-SNAPSHOT.war to /Users/Hemankita.Perabathini@ibm.com/.m2/repository/projects/WfdFrontEnd/1.0-SNAPSHOT/WfdFrontEnd-1.0-SNAPSHOT.war
[INFO] Installing /Users/Hemankita.Perabathini@ibm.com/PurpleCompute/Microprofile/WhatsForDinner/refarch-cloudnative-wfd-ui/pom.xml to /Users/Hemankita.Perabathini@ibm.com/.m2/repository/projects/WfdFrontEnd/1.0-SNAPSHOT/WfdFrontEnd-1.0-SNAPSHOT.pom
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 48.002 s
[INFO] Finished at: 2017-11-03T16:10:11-05:00
[INFO] Final Memory: 32M/517M
[INFO] ------------------------------------------------------------------------
```

5. Before starting your server, make sure [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) service along with [Appetizer](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-appetizer/tree/microprofile), [Dessert](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-dessert/tree/microprofile) and [Entree](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-entree/tree/microprofile) services is running. If you are running all the services locally on your system, you need to modify the ports in the respective POM.xml and run the server. 

- Open POM.xml in your respective microservice. Modify the below. Place the desired port here. Make sure all the services are running on different ports.

```
<testServerHttpPort>PORT_NUMBER</testServerHttpPort>

```

Let's say the appetizer service is running on 9081, dessert service is running on 9082 and entree service is running on 9083 and menu service is running on **XXXX**. Verify if all these services are running.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Appetizer_local.png">
</p>

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Dessert_local.png">
</p>

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Entree_local.png">
</p>

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Menu_local.png">
</p>

You can find a greater detail on how to run these services locally [here](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/local_readme.md).

6. Now start your server.

   `mvn liberty:start-server`

   You will see the below.
```
[INFO] Starting server defaultServer.
[INFO] Server defaultServer started with process ID 12497.
[INFO] Waiting up to 30 seconds for server confirmation:  CWWKF0011I to be found in /Users/Hemankita.Perabathini@ibm.com/PurpleCompute/Microprofile/WhatsForDinner/refarch-cloudnative-wfd-ui/target/liberty/wlp/usr/servers/defaultServer/logs/messages.log
[INFO] CWWKM2010I: Searching for CWWKF0011I in /Users/Hemankita.Perabathini@ibm.com/PurpleCompute/Microprofile/WhatsForDinner/refarch-cloudnative-wfd-ui/target/liberty/wlp/usr/servers/defaultServer/logs/messages.log. This search will timeout after 30 seconds.
[INFO] CWWKM2015I: Match number: 1 is [11/3/17 16:21:18:239 CDT] 00000019 com.ibm.ws.kernel.feature.internal.FeatureManager            A CWWKF0011I: The server defaultServer is ready to run a smarter planet..
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 44.575 s
[INFO] Finished at: 2017-11-03T16:21:18-05:00
[INFO] Final Memory: 12M/245M
[INFO] ------------------------------------------------------------------------
```
6. Now, go to your browser and access the UI at http://localhost:9080/WfdFrontEnd/.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/ui.png">
</p>

   Access URL : `http://<HOST>:<PORT>/<WAR_CONTEXT>/`

In our sample application, you can get the details of the above URL as follows.

- Since, we are running the application locally on our system, the **HOST** will be `localhost`.
- You can get the **PORT** and **WAR_CONTEXT** from the `<properties> </properties>` section of our POM.

```
<app.name>WfdFrontEnd</app.name>
<testServerHttpPort>9080</testServerHttpPort>
<testServerHttpsPort>9443</testServerHttpsPort>
<warContext>${app.name}</warContext>
```
So, **PORT** will be `9080` and **WAR_CONTEXT** will be `WfdFrontEnd`.

To access the health api, use http://localhost:9080/WfdFrontEnd/rest/health. This endpoint gives the health of your application

Access URL : `http://<HOST>:<PORT>/<WAR_CONTEXT>/<APPLICATION_PATH>/<ENDPOINT>`

- **APPLICATION_PATH** can be found in [JaxrsApplication.java](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-ui/blob/microprofile/src/main/java/application/rest/JaxrsApplication.java)

```
@ApplicationPath("/rest")
```

In our sample, the **APPLICATION_PATH** will be `rest`.

- Finally you can find the health endpoint at [HealthEndpoint.java](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-ui/blob/microprofile/src/main/java/application/rest/HealthEndpoint.java)

```
@Path("health")
```

7. If you are done accessing the application, you can stop your server using the following command.

   `mvn liberty:stop-server`

Once you do this, you see the below messages.

```
[INFO] CWWKM2001I: Invoke command is [/Users/Hemankita.Perabathini@ibm.com/PurpleCompute/Microprofile/WhatsForDinner/refarch-cloudnative-wfd-ui/target/liberty/wlp/bin/server, stop, defaultServer].
[INFO] objc[13241]: Class JavaLaunchHelper is implemented in both /Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/jre/bin/java (0x1060414c0) and /Library/Java/JavaVirtualMachines/jdk1.8.0_131.jdk/Contents/Home/jre/lib/libinstrument.dylib (0x10613b4e0). One of the two will be used. Which one is undefined.
[INFO] Stopping server defaultServer.
[INFO] Server defaultServer stopped.
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 31.603 s
[INFO] Finished at: 2017-11-03T16:23:26-05:00
[INFO] Final Memory: 13M/309M
[INFO] ------------------------------------------------------------------------
```

#### Docker file

We are using Docker to containerize the application. With Docker, you can pack, ship, and run applications on a portable, lightweight container that can run anywhere virtually.

```
FROM websphere-liberty:microProfile

MAINTAINER IBM Java engineering at IBM Cloud

COPY /target/liberty/wlp/usr/servers/defaultServer /config/
COPY target/liberty/wlp/usr/shared /opt/ibm/wlp/usr/shared/

RUN wget -t 10 -x -nd -P /opt/ibm/wlp/usr https://repo1.maven.org/maven2/net/wasdev/wlp/tracer/liberty-opentracing-zipkintracer/1.0/liberty-opentracing-zipkintracer-1.0-sample.zip && cd /opt/ibm/wlp/usr && unzip liberty-opentracing-zipkintracer-1.0-sample.zip && rm liberty-opentracing-zipkintracer-1.0-sample.zip

# Install required features if not present
RUN installUtility install --acceptLicense defaultServer

CMD ["/opt/ibm/wlp/bin/server", "run", "defaultServer"]
```

- The `FROM` instruction sets the base image. You're setting the base image to `websphere-liberty:microProfile`.
- The `MAINTAINER` instruction sets the Author field. Here it is `IBM Java engineering at IBM Cloud`.
- The `COPY` instruction copies directories and files from a specified source to a destination in the container file system.
  - You're copying the `/target/liberty/wlp/usr/servers/defaultServer` to the `config` directory in the container.
  - You're replacing the contents of `/opt/ibm/wlp/usr/shared/` with the contents of `target/liberty/wlp/usr/shared`.
- The `RUN` instruction runs the commands. 
  - The first instruction gets the Opentracing Zipkin feature and installs it in your server.
  - The second instruction is a precondition to install all the utilities in the server.xml file. You can use the RUN command to install the utilities on the base image.
- The `CMD` instruction provides defaults for an executing container.

##### Running the application locally in a container

1. Build the docker image.

`docker build -t wfd-ui:microprofile .`

Once this is done, you will see something similar to the below messages.
```
Successfully built 99da820b9da7
Successfully tagged wfd-ui:microprofile
```
You can see the docker images by using this command.

`docker images`

```
REPOSITORY                     TAG                 IMAGE ID            CREATED             SIZE
wfd-ui                         microprofile        99da820b9da7        28 seconds ago      379MB
```
2. Before running the docker images, make sure [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) service along with [Appetizer](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-appetizer/tree/microprofile), [Dessert](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-dessert/tree/microprofile) and [Entree](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-entree/tree/microprofile) services is running. If you are running all the services locally on your system, you need to modify the ports. 

- Modify the below. Place the desired port here. Make sure all the services are running on different ports.

```
docker run -p <PORT_NUMBER>:9080 --name <NAME> -t <IMAGE_NAME>
```

Let's say the appetizer service is running on 9081, dessert service is running on 9082, entree service is running on 9083 and menu service is running on 9084. Verify if all these services are running.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Appetizer_local.png">
</p>

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Dessert_local.png">
</p>

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Entree_local.png">
</p>

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/Menu_local.png">
</p>

You can find a greater detail on how to run these services locally on docker [here](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/local_docker_readme.md).

3. Run the docker image.

```
docker run -p 9080:9080 --name ui -t wfd-ui:microprofile
```

When it is done, you will see the following output.
```
[AUDIT   ] CWWKZ0058I: Monitoring dropins for applications. 
[AUDIT   ] CWWKT0016I: Web application available (default_host): http://a2a88720ac24:9080/jwt/
[AUDIT   ] CWWKT0016I: Web application available (default_host): http://a2a88720ac24:9080/health/
[AUDIT   ] CWWKT0016I: Web application available (default_host): http://a2a88720ac24:9080/ibm/api/
[AUDIT   ] CWWKT0016I: Web application available (default_host): http://a2a88720ac24:9080/metrics/
[AUDIT   ] CWWKT0016I: Web application available (default_host): http://a2a88720ac24:9080/WfdFrontEnd/
[AUDIT   ] CWWKZ0001I: Application WfdFrontEnd-1.0-SNAPSHOT started in 1.049 seconds.
[AUDIT   ] CWWKF0012I: The server installed the following features: [microProfile-1.2, mpFaultTolerance-1.0, servlet-3.1, ssl-1.0, jndi-1.0, mpHealth-1.0, appSecurity-2.0, jsonp-1.0, mpConfig-1.1, jaxrs-2.0, jaxrsClient-2.0, concurrent-1.0, jwt-1.0, mpMetrics-1.0, mpJwt-1.0, json-1.0, cdi-1.2, distributedMap-1.0].
[AUDIT   ] CWWKF0011I: The server defaultServer is ready to run a smarter planet.
```
4. Now, view the UI at http://localhost:9080/WfdFrontEnd/.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/ui.png">
</p>

   Access URL : `http://<HOST>:<PORT>/<WAR_CONTEXT>/`

5. Once you make sure the application is working as expected, you can come out of the process. You can do this by pressing Ctrl+C on the command line where the server was started.

6. You can also remove the container if desired. This can be done in the following way.

`docker ps`

```
CONTAINER ID        IMAGE                        COMMAND                  CREATED             STATUS              PORTS                              NAMES
a2a88720ac24        wfd-ui:microprofile          "/opt/ibm/wlp/bin/..."   5 minutes ago       Up 5 minutes        0.0.0.0:9080->9080/tcp, 9443/tcp   ui
```

Grab the container id.

- Do `docker stop <CONTAINER ID>`
In this case it will be, `docker stop a2a88720ac24`
- Do `docker rm <CONTAINER ID>`
In this case it will be, `docker rm a2a88720ac24`
