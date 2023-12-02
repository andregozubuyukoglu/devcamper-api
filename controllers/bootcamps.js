// @description     GET all bootcamps
// @route           GET /api/v1/bootcamps
// @access          Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show all bootcamps" })
}

// @description     GET single bootcamp
// @route           GET /api/v1/bootcamp/:id
// @access          Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show  bootcamps ${req.params.id}` })
}

// @description     Create new bootcamp
// @route           POST /api/v1/bootcamps
// @access          Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Create bootcamps" })
}

// @description     Update bootcamp
// @route           PUT /api/v1/bootcamp
// @access          Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update  bootcamp ${req.params.id}` })
}

// @description     Delete bootcamp
// @route           DELETE /api/v1/bootcamp/:id
// @access          Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete  bootcamp ${req.params.id}` })
}
