pipeline {
    options {
        timeout(time: 1, unit: 'HOURS')
    }
    agent {
        // try to update this to a newer version like ubuntu 20.04 ...
        label 'ubuntu-1804 && amd64 && docker'
    }
    stages {
        stage('build and push') {
            when {
                branch 'master'
            }
            sh "docker build -t docker/quendl ."

            steps {
                withDockerRegistry([url: "", credentialsId: "dockerbuildbot-index.docker.io"]) {
                    sh("docker push docker/quendl")
                }
            }
        }
    }
}
