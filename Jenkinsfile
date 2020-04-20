pipeline {
    agent { dockerfile true }
    post {
        success {
            sh 'docker rm -f demo_node || true'
            sh 'docker run -d -p 4200:3000 --name demo_node'
        }
    }
}

