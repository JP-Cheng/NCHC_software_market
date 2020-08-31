FROM centos
RUN yum install -y centos-release-scl && yum install -y devtoolset-9-gcc devtoolset-9-gcc-c++ && scl enable devtoolset-9 bash
RUN make && make clean
