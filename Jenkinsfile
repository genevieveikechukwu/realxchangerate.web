pipeline {

	agent any
	stages {
		stage("build frontend-client"){

			steps {
				sh "cd frontend"
				sh "cd frontend/client && npm i --force && CI=false npm run build"
			} 
          }
    
    		stage("build frontend-admin"){

			steps {
				sh "cd frontend"
				sh "cd frontend/admin && npm i --force && CI=false npm run build"
			} 
          }
    
    		stage("deploy frontend"){

			steps {
				sh "sudo cp -rf ${WORKSPACE}/frontend/client/build/* /var/www/streetrate.hng.tech/html/client/"
				sh "sudo cp -fr ${WORKSPACE}/frontend/admin/build/* /var/www/streetrate.hng.tech/html/admin/"
// 				sh "cd backend"
// 				sh "cd backend && python3 -m pip install --upgrade pip virtualenv"
// 				sh "cd backend && virtualenv -p python3 venv"
//         			sh "cd backend && source venv/bin/activate"
// 				sh "cd backend && pip3 install -r requirements.txt --force"
			} 
        	}
    
		stage("build & deploy backend") {
		
			steps {
//				sh "sudo su - light && whoami"
        			sh "sudo cp -rf ${workspace}/backend/* /home/light/realxchangerate/backend"
				sh "sudo bash /home/light/realxchangerate.sh"
			}
			
		}

        	}	

	}
