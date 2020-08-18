FROM centos
RUN yum -y install git-all
RUN yum install -y centos-release-scl
RUN install -y devtoolset-9-gcc devtoolset-9-gcc-c++
RUN scl enable devtoolset-9 bash
