############################################## ghislain.bernard@gmail.com ##############################################

all: clean

SHELL = /usr/bin/env bash

########################################################################################################################

clean:
	@echo ''
	@echo -e '/!\ cleaning...'

	rm --force capture.png
	rm --force --recursive node_modules

	@echo ...done

############################################## ghislain.bernard@gmail.com ##############################################
