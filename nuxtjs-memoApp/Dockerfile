FROM centos:7

EXPOSE 3000

RUN \
  yum update -y && yum install -y sudo && yum clean all

RUN \
  curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash - && \
  sudo yum install -y nodejs

RUN \
  curl -sL https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo && \
  sudo yum install -y yarn
