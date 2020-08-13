FROM centos
RUN yum install -y centos-release-scl
RUN yum -y install git-all
RUN install -y devtoolset-9-gcc devtoolset-9-gcc-c++
RUN scl enable devtoolset-9 bash
