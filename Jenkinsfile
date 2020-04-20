pipeline {
    agent { dockerfile true }
    stages {
        stage('build') {
            steps {
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

