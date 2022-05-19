let choose_name = async (department) => {

	let default_option = document.getElementById("default_course");
	default_option.text = "*Please Wait*";

	const response = await fetch("https://recourseatashoka.herokuapp.com/api/course?semester=spring%202022&department=" + department);
  	const courses = await response.json();

  	course_names = []
	for (let course of courses.data) {
		course_names.push(course.name);
	}
	course_names = new Set(course_names);
	
	let select = document.getElementById("course_names");
	let options = document.querySelectorAll(".course_names option");
	options.forEach(x => x.remove());
	console.log(options);
	for (let course_name of course_names) {
		select.add(new Option(course_name, course_name))
	}

	default_option.text = "*Please Select*";
}

let choose_prof = async (course) => {
	let default_option = document.getElementById("default_prof");
	default_option.text = "*Please Wait*";

	const response = await fetch("https://recourseatashoka.herokuapp.com/api/course?semester=spring%202022&name=" + course);
  	const profs = await response.json();

  	prof_names = []
	for (let prof of profs.data) {
		prof_names.push(prof.faculty.professors[0].name);
	}
	prof_names = new Set(prof_names);
	
	let select = document.getElementById("prof_names");
	for (let prof_name of prof_names) {
		select.add(new Option(prof_name, prof_name))
	}

	default_option.text = "*Please Select*";
}
