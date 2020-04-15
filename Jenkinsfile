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
                    sh 'node app.js &',
                    sh 'sleep 1'
                    sh 'echo $! > .pidfile'
                    input message: 'Finished using the web site? (Click "Proceed" to continue)'
                    sh 'kill $(cat .pidfile)'
            }
        }
    }
}

