# leapcraft-assignment
 Tech Stack Used:
1. React.js
2. Node.js and Express.js
3. Mysql Database  (Sequelize ORM)

#### Time Required: 
Start Date: 12th June 2020 at 8 PM
End Date: 14th June 2020 at 8 PM

### Features Completed:
1. User can view, add, edit and delete the category.
2. User can view, add, edit and delete the task.
3. User can update the task status into 3 categories: Pending Tasks, Progress Tasks and Completed Tasks 
4. User can update the task level into 2 categories: Easy and Difficult Level.

#### Database
1. Categories Tables:

| categories    |      Type       |
| ------------- |-------------|         
| cat_id        | Primary Key |
| cat_name      | String      | 
|  cat_desc | String |
| created    | Date        |

2. Tasks Tables:

| tasks   |      Type       |
| ------------- |-------------|         
| id        | Primary Key |
| task_title      | String      | 
|  task_desc | String |
| cat_id   | Foreign Key      |
| task_status   | int     |
| task_level   | int   |
| task_deadline   | Date    |

Backend APIs:
1. Category
	
|APIs  | Description  |
|--|--|
| /api/category/list | Lists all categories |
| /api/category/add | Add Category |
| /api/category/delete/:catId | Delete category where id=catId |
| /api/category/update/:catId | Update Category where id=catId |
| /api/category/get/:catId | Get Category where id=catId |

1. Task
	
|APIs  | Description  |
|--|--|
| /api/task/list/:catId | Lists all Tasks of particular category |
| /api/task/add | Add Task |
| /api/task/delete/:taskId | Delete task where id=taskId |
| /api/task/update/:taskId | Update task where id=taskId |
| /api/task/get/:taskId | Get task where id=taskId |

### Backend Folder Structure
     Category Folder
	      category.js
	      task.js
	 Database Folder
	      db.js
	 models Folder
	      category.js
	      task.js
	 routes Folder
	      category.js
	      task.js
	    	      
### Frontend  Folder Structure
      core Folder
	     category-components Folder
		      AddCategory.js
		      EditCategory.js
		      ListsCategory.js
		      apiCategory.js
		 task-components Folder
		      AddTask.js
		      EditTask.js
		      ListsTask.js
		      apiTask.js
		 common-components Folder
		      Header.js
		      ModalDesign.js
		 routes Folder
		      category.js
		      task.js
		 Home.js
		 config.js
		 Routes.js
		 style.css
### Screenshots and Video of Assignment


Google Drive Link:
[Click Here](https://drive.google.com/drive/folders/11UhVCzPt1WoPGwB9G5rljywJoNJOfojZ?usp=sharing)
### Video of Assignment


  


