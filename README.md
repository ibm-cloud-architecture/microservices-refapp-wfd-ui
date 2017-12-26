# Microservices Reference Application - What's For Dinner

## User Interface Service - MicroProfile

This repository contains the **Java MicroProfile** implementation of the **UI Service** which is a part of microservice-based reference application called **What's For Dinner** that can be found in https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd

<p align="center">
  <a href="https://www.ibm.com/us-en/marketplace/microservice-builder/">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB.jpg" width="300" height="100">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://pugjs.org/api/getting-started.html">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/pug.png" width="100" height="100">
  </a>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
  <a href="https://www.ibm.com/cloud-computing/solutions/private-cloud/">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/ICP.jpg" width="120" height="100">
  </a>
</p>

1. [Introduction](#introduction)
2. [How it works](#how-it-works)
3. [Implementation](#implementation)
    1. [Pugjs](#pugjs)
4. [Building the app](#building-the-app)
5. [Running the app and stopping it](#running-the-app-and-stopping-it)
    1. [Pre-requisites](#pre-requisites)
    2. [Locally in JVM](#locally-in-jvm)
    3. [Locally in Containers](#locally-in-containers)
    4. [Locally in Minikube](#locally-in-minikube)
    5. [Remotely in ICP](#remotely-in-icp)
6. [DevOps Strategy](#devops-strategy)
7. [References](#references)

### Introduction

This project demonstrates the implementation of UI Microservice. The UI microservice interacts with the [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) microservices and displays the front end.

- Based on [Pugjs](https://pugjs.org/api/getting-started.html).
- Integrated with the [MicroService Builder](https://developer.ibm.com/microservice-builder/).
- Deployment options for local, Docker Container-based runtimes, Minikube environment and ICP/BMX.

### How it works

UI Microservice serves [**What's For Dinner**](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd), Microservice-based reference application. Though it is a part of a bigger application, UI service is itself an application in turn that displays the front end for the [**What's For Dinner**](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd) application. This service interacts with the backend [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) service and displays the menu on the user interface.

### Implementation

#### [Pugjs](https://pugjs.org/api/getting-started.html)

Pug is a templating engine for Nodejs which helps you in creating HTML by its white space syntax.

- Easy to understand.
- Clean and readable syntax.

### Building the app

To build the application, we used maven build. Maven is a project management tool that is based on the Project Object Model (POM). Typically, people use Maven for project builds, dependencies, and documentation. Maven simplifies the project build. In this task, you use Maven to build the project.

1. Clone this repository.

   `git clone https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-ui.git`

2. Checkout MicroProfile branch.

   `git checkout microprofile`

3. `cd refarch-cloudnative-wfd-ui/`

4. Run this command. This command builds the project and installs it.

   `mvn install`

   If this runs successfully, you will be able to see the below messages.

```
[INFO] ------------------------------------------------------------------------
[INFO] BUILD SUCCESS
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 18.980 s
[INFO] Finished at: 2017-11-14T19:12:24-06:00
[INFO] Final Memory: 29M/843M
```
### Running the app and stopping it

#### Pre-requisite

For the UI microservice to work, [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) microservice along with its downstream services [Appetizer](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-appetizer/tree/microprofile), [Dessert](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-dessert/tree/microprofile) and [Entree](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-entree/tree/microprofile) must be running.

1. Locally in JVM

To run the What's For Dinner application locally in JVM, please complete the [Building the app](#building-the-app) section.

2. Locally in Containers

To run the What's For Dinner application locally in container, you need [Docker](https://www.docker.com/) to be locally present in your system.

3. Locally in Minikube

To run the What's For Dinner application locally on your laptop on a Kubernetes-based environment such as Minikube (which is meant to be a small development environment) we first need to get few tools installed:

- [Kubectl](https://kubernetes.io/docs/user-guide/kubectl-overview/) (Kubernetes CLI) - Follow the instructions [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/) to install it on your platform.
- [Helm](https://github.com/kubernetes/helm) (Kubernetes package manager) - Follow the instructions [here](https://github.com/kubernetes/helm/blob/master/docs/install.md) to install it on your platform.

Finally, we must create a Kubernetes Cluster. As already said before, we are going to use Minikube:

- [Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/) - Create a single node virtual cluster on your workstation. Follow the instructions [here](https://kubernetes.io/docs/tasks/tools/install-minikube/) to get Minikube installed on your workstation.

We not only recommend to complete the three Minikube installation steps on the link above but also read the [Running Kubernetes Locally via Minikube](https://kubernetes.io/docs/getting-started-guides/minikube/) page for getting more familiar with Minikube. We can learn there interesting things such as reusing our Docker daemon, getting the Minikube's ip or opening the Minikube's dashboard for GUI interaction with out Kubernetes Cluster.

4. Remotely in ICP

To run the What's For Dinner application on IBM Cloud Private, we first need to get few tools installed:

- [Kubectl](https://kubernetes.io/docs/user-guide/kubectl-overview/) (Kubernetes CLI) - Follow the instructions [here](https://kubernetes.io/docs/tasks/tools/install-kubectl/) to install it on your platform.

- [IBM Cloud Private](https://www.ibm.com/support/knowledgecenter/en/SSBS6K). You can find the detailed installation instructions [here](https://github.com/ibm-cloud-architecture/refarch-privatecloud).

Along with these, you also need a [JSON processor utility](https://stedolan.github.io/jq/).

- In our sample, we used Microservice Builder as our Devops strategy. To ensure continuous delivery and deployment, you need a continuous integration pipeline and Microservice Builder serves this purpose so very well. In order to take advantage of this, you need to setup the Microservice Builder pipeline. To find instructions on how to set your Microservice Builder pipeline up, click [here](https://www.ibm.com/support/knowledgecenter/en/SS5PWC/pipeline.html).

### Locally in JVM

1. Before doing the above, make sure [Menu](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-menu/tree/microprofile) service along with [Appetizer](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-appetizer/tree/microprofile), [Dessert](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-dessert/tree/microprofile) and [Entree](https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd-entree/tree/microprofile) services is running. If you are running all the services locally on your system, you need to modify the ports in the respective POM.xml and run the server.

Let's say the appetizer service is running on 9081, dessert service is running on 9082 and entree service is running on 9083 and menu service is running on 9084. Verify if all these services are running.

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

2. Run `npm start`

It starts serving your application.

Now, go to your browser and access the UI at `http://localhost:3000/`.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/ui.png">
</p>

   Access URL : `http://<HOST>:<PORT>`

3. To come out or stop the application, press Crtl+C.

### Locally in Containers

To run the application in docker, we first need to define a Docker file.

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

#### Running the application locally in a container

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
4. Now, view the UI at `http://localhost:3000/`.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/ui.png">
</p>

   Access URL : `http://<HOST>:<PORT>/<WAR_CONTEXT>/`

5. Once you make sure the application is working as expected, you can come out of the process. You can do this by pressing Ctrl C on the command line where the server was started.

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

### Locally in Minikube

#### Setting up your environment  

1. Start your minikube. Run the below command.

`minikube start`

You will see output similar to this.

```
Setting up certs...
Connecting to cluster...
Setting up kubeconfig...
Starting cluster components...
Kubectl is now configured to use the cluster.
```

2. To install Tiller which is a server side component of Helm, initialize helm. Run the below command.

`helm init`

If it is successful, you will see the below output.

```
$HELM_HOME has been configured at /Users/user@ibm.com/.helm.

Tiller (the helm server side component) has been installed into your Kubernetes Cluster.
Happy Helming!
```

3. Check if your tiller is available. Run the below command.

`kubectl get deployment tiller-deploy --namespace kube-system`

If it available, you can see the availability as below.

```
NAME            DESIRED   CURRENT   UP-TO-DATE   AVAILABLE   AGE
tiller-deploy   1         1         1            1           1m
```

4. Verify your helm version before proceeding like below.

`helm version`

You will see the below output.

```
Client: &version.Version{SemVer:"v2.4.2", GitCommit:"82d8e9498d96535cc6787a6a9194a76161d29b4c", GitTreeState:"clean"}
Server: &version.Version{SemVer:"v2.5.0", GitCommit:"012cb0ac1a1b2f888144ef5a67b8dab6c2d45be6", GitTreeState:"clean"}
```

#### Running the application on Minikube

1. Build the docker image.

Before building the docker image, set the docker environment.

- Run the below command.

`minikube docker-env`

You will see the output similar to this.

```
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://192.168.99.100:2376"
export DOCKER_CERT_PATH="/Users/user@ibm.com/.minikube/certs"
export DOCKER_API_VERSION="1.23"
# Run this command to configure your shell:
# eval $(minikube docker-env)
```

- For configuring your shell, run the below command.

`eval $(minikube docker-env)`

- Now run the docker build.

`docker build -t wfdui:v1.0.0 .`

If it is a success, you will see the below output.

```
Successfully built 92258de9674f
Successfully tagged wfdui:v1.0.0
```

2. Run the helm chart as below.

`helm install --name=wfdui chart/wfdui`

Yow will see message like below.

```
==> v1beta1/Deployment
NAME              DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
wfdui-deployment  1        1        1           0          1s
```

Please wait till your deployment is ready. To verify run the same command and you should see the availability.

```
==> v1beta1/Deployment
NAME              DESIRED  CURRENT  UP-TO-DATE  AVAILABLE  AGE
wfdui-deployment  1        1        1           1          1s
```

3. You can access the application at `http://<MinikubeIP>:<PORT>/<WAR_CONTEXT>/<APPLICATION_PATH>/<ENDPOINT>`. To get the access url.

- To get the IP, Run this command.

`minikube ip`

You will see something like below.

```
192.168.99.100
```

- To get the port, run this command.

`kubectl get service wfdui`

You will see something like below.

```
NAME      CLUSTER-IP   EXTERNAL-IP   PORT(S)          AGE
wfdui     10.0.0.135   <nodes>       3000:31744/TCP   1m
```

In the above case, the access url will be `http://192.168.99.100:31744/`.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/ui_minikube.png">
</p>

### Remotely in ICP

#### [IBM Cloud Private](https://www.ibm.com/cloud-computing/solutions/private-cloud/)

IBM Private Cloud is has all the advantages of public cloud but is dedicated to single organization. You can have your own security requirements and customize the environment as well. Basically it has tight security and gives you more control along with scalability and easy to deploy options. You can run it externally or behind the firewall of your organization.

Basically this is an on-premise platform.
1. Includes docker container manager
2. Kubernetes based container orchestrator
3. Graphical user interface

You can find the detailed installation instructions for IBM Cloud Private [here](https://github.com/ibm-cloud-architecture/refarch-privatecloud)

#### Running the application on IBM Cloud Private

Before running the application, make sure you added the docker registry secret.

- Install the jq command line JSON processor utility.

`yum install -y jq`

or

`apt install -y jq`

- log in to the IBM Cloud Private. Login as **admin** user.

- Go to **admin > Configure Client**.

- Grab the kubectl configuration commands.

- Run those commands at your end.

- Create docker-registry secret **admin.registrykey**. This allows the pipeline to access the Docker registry.

```
kubectl create secret docker-registry admin.registrykey --docker-server=https://mycluster.icp:8500 --docker-username=admin --docker-password=admin --docker-email=null
```
- Now update the service account with the image pull secret.

```
kubectl get serviceaccounts default -o json |jq  'del(.metadata.resourceVersion)' |jq 'setpath(["imagePullSecrets"];[{"name":"admin.registrykey"}])' |kubectl replace serviceaccount default -f -
```

Once you have all this, you are ready to deploy your microservice to Microservice builder on IBM Cloud private.

- Now you have your microservice builder pipeline configured.
- Push the project to the repository that is monitored by your micro service builder pipeline.
- It will automatically pick the project, build it and deploy it to IBM cloud private.

To access the sample application, go to IBM Cloud Private dashboard.
- Go to **Workload > Services > wfdui** and click on it.
- You can see the service like below.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/wfduiservice.png">
</p>

Click on the **http** link there. You will be redirected to the UI.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/uiICP.png">
</p>

### DevOps strategy

We opted [Microservice Builder](https://www.ibm.com/us-en/marketplace/microservice-builder) as our continuos delivery pipeline. It helps us to maintain the application end to end from development to production supporting continuous delivery. It helps us to develop and deploy microservice based applications. Using the pre-integrated Devops pipeline, developers can rapidly build innovative services and deploy them easily.

Microservice Builder runs on a Jenkins pipeline. Basically Jenkins runs in a docker container and it is deployed on Kubernetes using helm. This jenkins should be integrated with the Github. The repository to which you push the code should be integrated to Microservice Builder pipeline through Github. Then only Microservice Builder will be able to pick your code.

Microservice builder has an option to deploy with IBM Cloud Private. You can set IBM Private Cloud with Microservice Builder pipeline to deploy the microservices.

From IBM cloud private dashboard, you can access the MSB pipeline from your services. The jenkins pipeline is as follows.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/jenkinsscreeen.png">
</p>

By clicking on the name of your organization, you can find all the MSB enabled repositories here.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/uOrgscreen.png">
</p>

By clicking on the **refarch-cloudnative-wfd-ui**, you can see the below screen.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/ujenkinsappscreen.png">
</p>

If you see a blue ball there, your service is successfully built and running fine. If it red, it means you have some problems with it.

Whenever you do some changes and push the code to this repository, MSB build queue will initiate the process.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/uMSBbuildqueue.png">
</p>

Once this is done, Jenkins slave will be called.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/ujenkinsslaveinit.png">
</p>

Then the Jenkins slave will pick up the build and initiate the process.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/ujenkinsslave%20build.png">
</p>

Then the build will begin and starts running.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/ubuild.png">
</p>

Finally your service gets deployed once the build is done.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/ucompletedbuild.png">
</p>

To access your service, go to IBM Cloud Private dashboard.
- Go to **Workload > Services > wfdui** and click on it.
- You can see the service like below.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/wfduiservice.png">
</p>

Click on the **http** link there. You will be redirected to the UI.

<p align="center">
    <img src="https://github.com/ibm-cloud-architecture/refarch-cloudnative-wfd/blob/microprofile/static/imgs/MSB_jenkins/uiICP.png">
</p>

### References

1. [Microservice Builder](https://www.ibm.com/support/knowledgecenter/en/SS5PWC/intro-microservice-builder.html)
2. [Developer Tools CLI](https://console.bluemix.net/docs/cloudnative/dev_cli.html#developercli)
3. [IBM Cloud Private](https://www.ibm.com/support/knowledgecenter/en/SSBS6K_2.1.0/kc_welcome_containers.html)
4. [IBM Cloud Private Installation](https://github.com/ibm-cloud-architecture/refarch-privatecloud)
4. [Pugjs](https://pugjs.org/api/getting-started.html)
