const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017';
const dbName = 'onlineLearningPlatform';
async function createDatabase() {
  const client = new MongoClient(uri);
  try {
    await client.connect();
    console.log('Connected to MongoDB');
    const database = client.db(dbName);
    const usersCollection = database.collection('users');
    const coursesCollection = database.collection('courses');
    const modulesCollection = database.collection('modules');
    const quizzesCollection = database.collection('quizzes');
    const quizQuestionsCollection = database.collection('quiz_questions');
    const questionOptionsCollection = database.collection('question_options');
    const enrollmentsCollection = database.collection('enrollments');
    const userProgressCollection = database.collection('user_progress');
    const certificationsCollection = database.collection('certifications');
    const badgesCollection = database.collection('badges');
    const userBadgesCollection = database.collection('user_badges');
    const pointsCollection = database.collection('points');
    const commentsCollection = database.collection('comments');
    const ratingsCollection = database.collection('ratings');
    const user = await usersCollection.insertOne({
      username: 'John Doe',
      email: 'john.doe@gmail.com',
      password: 'hashedpassword', 
      role: 'Student',
      profile_picture_url: 'https://example.com/john.jpg',
      date_joined: new Date(),
      status: 'active',
    });
    const course = await coursesCollection.insertOne({
      course_name: 'JavaScript Basics',
      description: 'Learn the basics of JavaScript.',
      instructor_id: user.insertedId, 
      category: 'Programming',
      price: 0, 
      course_image_url: 'https://example.com/js-course.jpg',
      creation_date: new Date(),
      status: 'active',
      certificate_enabled: true,
    });
    const module = await modulesCollection.insertOne({
      course_id: course.insertedId, 
      module_name: 'Introduction to JavaScript',
      module_description: 'This module introduces the basics of JavaScript.',
      video_url: 'https://youtube.com/video-url',
      module_order: 1,
      module_type: 'video',
    });
    const quiz = await quizzesCollection.insertOne({
      course_id: course.insertedId, 
      quiz_name: 'JavaScript Basics Quiz',
      quiz_description: 'Test your knowledge of JavaScript basics.',
      total_marks: 10,
      time_limit: 15, 
      created_at: new Date(),
    });
    const question = await quizQuestionsCollection.insertOne({
      quiz_id: quiz.insertedId, 
      question_text: 'What is JavaScript?',
      question_type: 'multiple-choice',
      marks: 2,
      created_at: new Date(),
    });
    await questionOptionsCollection.insertMany([
      { question_id: question.insertedId, option_text: 'A programming language', is_correct: true },
      { question_id: question.insertedId, option_text: 'A CSS framework', is_correct: false },
      { question_id: question.insertedId, option_text: 'A text editor', is_correct: false },
    ]);
    const enrollment = await enrollmentsCollection.insertOne({
      user_id: user.insertedId, 
      course_id: course.insertedId, 
      enrollment_date: new Date(),
      completion_date: null, 
      status: 'enrolled',
    });
    await userProgressCollection.insertOne({
      user_id: user.insertedId, 
      course_id: course.insertedId, 
      module_id: module.insertedId, 
      completion_status: false,
    });
    await certificationsCollection.insertOne({
      user_id: user.insertedId, 
      course_id: course.insertedId, 
      issue_date: new Date(),
      certificate_url: 'https://example.com/certificate-url',
      status: 'issued',
    });
    const badge = await badgesCollection.insertOne({
      badge_name: 'JavaScript Beginner',
      badge_description: 'Awarded for completing the JavaScript Basics course.',
      points_required: 100,
      image_url: 'https://example.com/js-badge.jpg',
    });
    await userBadgesCollection.insertOne({
      user_id: user.insertedId, 
      badge_id: badge.insertedId, 
      earned_date: new Date(),
    });
    await pointsCollection.insertOne({
      user_id: user.insertedId, 
      points_earned: 50,
      earned_for: 'Course completion',
      earned_date: new Date(),
    });
    await commentsCollection.insertOne({
      user_id: user.insertedId, 
      module_id: module.insertedId, 
      comment_text: 'Great introduction to JavaScript!',
      created_at: new Date(),
    });
    await ratingsCollection.insertOne({
      user_id: user.insertedId, 
      course_id: course.insertedId,
      rating_value: 4, 
      created_at: new Date(),
    });
    console.log('Sample data inserted successfully!');
  } catch (err) {
    console.error('Error:', err);
  } finally {
    await client.close();
  }
}
createDatabase();
