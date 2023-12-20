const courses = [
    "Financial Accounting ",
    "Introduction to Art ",
    "Biology for Beginners",
    "Chemistry Fundamentals",
    "Introduction to Computer Science",
    "Principles of Microeconomics",
    "English Composition",
    "French I",
    "General Eductaion",
    "World History",
    "Calculus I",
    "Linear Algebra",
    "Strategic Management",
    "Marketing principles",
    "Music Appreciation",
    "Physics for Engineers",
    "Quantum Mechanics",
    "Introduction to Politics",
    "Introduction to Psychology",
    "Sociology"
  ];
  
  const coursesContainer = document.querySelector('.courses');
  
  function displayCourses(query = '') {
    const filteredCourses = courses.filter(course =>
      course.toLowerCase().includes(query.toLowerCase())
    );
  
    coursesContainer.innerHTML = ''; // Clear the container
  
    filteredCourses.forEach(course => {
      const courseItem = document.createElement('div');
      courseItem.classList.add('course-item');
      courseItem.textContent = course;
      coursesContainer.appendChild(courseItem);
      courseItem.style.marginBottom = '15px';
      courseItem.style.backgroundColor = 'var(--very-light-solid)';
      courseItem.style.padding = '1em';
      courseItem.style.borderRadius = '5px';
      courseItem.style.boxShadow = '0px 1px 1px rgba(0, 0, 0, 0.4)';
  
      coursesContainer.appendChild(courseItem);
    });
  }
  
  displayCourses(); // Show all courses initially
  
  const searchInput = document.querySelector('.search input');
  searchInput.addEventListener('input', function() {
    displayCourses(this.value);
  });
  document.addEventListener("DOMContentLoaded", function() {
    const courseItems = document.querySelectorAll('.course-item');
    const submitButton = document.getElementById('submitCourses');

    function handleCourseSelection(event) {
        if (event.target.classList.contains('selected')) {
            event.target.classList.remove('selected');
        } else {
            event.target.classList.add('selected');
        }
    }

    function handleHoverEffect(event) {
        event.target.classList.toggle('hovered');
    }

    courseItems.forEach(item => {
        item.addEventListener('click', handleCourseSelection);
        item.addEventListener('mouseover', handleHoverEffect);
        item.addEventListener('mouseout', handleHoverEffect);
    });

    submitButton.addEventListener('click', function() {
        const selectedCourses = document.querySelectorAll('.selected');
        const selectedCoursesArray = Array.from(selectedCourses).map(course => course.dataset.course);
        console.log('Selected Courses:', selectedCoursesArray);
        // Perform further actions like sending the selected courses to a server or processing them.
    });
});