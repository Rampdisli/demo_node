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
                    sh 'npm install'
                    sh 'docker build -t demo_node .'
            }
        }
    }
    post {
        success {
            sh 'docker rm -f demo_node || true'
            sh 'docker run -d -p 4200:3000 --name demo_node'
        }
    }
}

