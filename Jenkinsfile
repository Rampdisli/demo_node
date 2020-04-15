pipeline {
  agent {
    docker {
      image 'node:6.3'
    }

  }
  stages {
    stage('build') {
      steps {
        timeout(time: 1, unit: 'MINUTES') {
          sh 'node app.js'
        }

      }
    }

    stage('') {
      steps {
        cifsPublisher()
      }
    }

  }
}