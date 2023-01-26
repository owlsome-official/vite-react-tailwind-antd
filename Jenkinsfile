pipeline {
  agent any
  tools { nodejs 'node' }
  environment {
    DOCKER_REGISTRY = 'REPLACE_WITH_YOUR_DOCKER_REGISTRY'
    GROUP_NAME = 'REPLACE_WITH_YOUR_GROUP_NAME'
    PROJECT_NAME = 'REPLACE_WITH_YOUR_PROJECT_NAME'
  }
  stages {
    stage('Sonarqube Scanner') {
      environment {
        scannerHome = tool 'SonarQubeScanner'
      }
      steps {
        withSonarQubeEnv('sonarqube') {
          sh "echo ${scannerHome}"
          sh "${scannerHome}/bin/sonar-scanner -X"
        }
      }
    }

    stage('Preparing & Build for UAT') {
      steps {
        script {
          withEnv(["PATH+NODE=${env.WORKSPACE}/node/bin"]) {
            sh 'npm install -g yarn'
            sh 'yarn'
            sh 'yarn build'
          }
        }
      }
    }

    stage('Read package.json Configuration') {
      steps {
        script {
          def props = readJSON file: "/var/jenkins_home/workspace/${PROJECT_NAME}/package.json"
          env.version = props.version
          sh "echo ${env.version}"
        }
      }
    }

    stage('Build ENV docker-compose') {
      steps {
        sh "echo 'TAG=${env.version}'>>.env"
        sh 'chmod 777 Dockerfile'
      }
    }

    stage('Build Docker Image for UAT') {
      steps {
        sh "docker build -t ${DOCKER_REGISTRY}/${GROUP_NAME}/${PROJECT_NAME}:${env.version} -f Dockerfile ."
      }
    }

    stage('Assign docker tag & push to docker registry') {
      steps {
        sh "docker login ${DOCKER_REGISTRY} -u ${DOCKER_REGISTRY_USERNAME} -p ${DOCKER_REGISTRY_PASSWORD}"
        sh "docker push ${DOCKER_REGISTRY}/${GROUP_NAME}/${PROJECT_NAME}:${env.version}"
        sh "docker logout ${DOCKER_REGISTRY}"
      }
    }

    stage('Run docker-compose') {
      steps {
        // sh "docker-compose stop ${PROJECT_NAME}"
        // sh "docker-compose rm -f ${PROJECT_NAME}"
        sh "docker-compose up -d ${PROJECT_NAME}"
      }
    }
  }
}
