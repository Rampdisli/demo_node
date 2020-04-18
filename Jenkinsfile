pipeline {
    agent {
        docker {
            image 'node:6.3'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('build') {
            steps {
                    sh 'node app.js'
            }
        }
    }
}

