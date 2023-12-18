const ErrorResponse = require("../utils/errorResponse")
const Course = require("../models/Course")
const Bootcamp = require("../models/Bootcamp")
const asyncHandler = require("../middleware/async")

// @description     GET courses
// @route           GET /api/v1/courses
// @route           GET /api/v1/bootcamps/:bootcampId/courses
// @access          Public
exports.getCourses = asyncHandler(async (req, res, next) => {
  let query

  if (req.params.bootcampId) {
    query = Course.find({ bootcamp: req.params.bootcampId })
  } else {
    query = Course.find().populate({
      path: "bootcamp",
      select: "name description",
    })
  }
  const courses = await query

  res.status(200).json({
    success: true,
    count: courses.length,
    data: courses,
  })
})

// @description     GET single courses
// @route           GET /api/v1/courses/:id
// @access          Public
exports.getCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id).populate({
    path: "bootcamp",
    select: "name description",
  })

  if (!course) {
    return next(new ErrorResponse(`Course not found`), 404)
  }

  res.status(200).json({
    success: true,
    data: course,
  })
})

// @description     Add course
// @route           GET /api/v1/bootcamps/:bootcampId/courses
// @access          Private
exports.addCourse = asyncHandler(async (req, res, next) => {
  req.body.bootcamp = req.params.bootcampId

  const bootcamp = await Bootcamp.findById(req.params.id.bootcampId)

  if (!course) {
    return next(new ErrorResponse(`Bootcamp not found`), 404)
  }

  const course = await Course.create(req.body)

  res.status(200).json({
    success: true,
    data: course,
  })
})

// @description     Update course
// @route           Update /api/v1/courses/
// @access          Private
exports.updateCourse = asyncHandler(async (req, res, next) => {
  let course = await Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found`), 404)
  }

  course = await Course.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })

  res.status(200).json({
    success: true,
    data: course,
  })
})

// @description     Delete course
// @route           Delete /api/v1/courses/
// @access          Private
exports.deleteCourse = asyncHandler(async (req, res, next) => {
  const course = await Course.findById(req.params.id)

  if (!course) {
    return next(new ErrorResponse(`Course not found`), 404)
  }

  await course.remove()

  res.status(200).json({
    success: true,
    data: course,
  })
})
