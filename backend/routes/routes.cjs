const express=require('express')
const router=express.Router()
const feed=require('../controllers/Feed.cjs')
const book=require('../controllers/Booking.cjs')

router.post("/feedback",feed.usersFeed)
router.post("/book",book.usersBook)


module.exports=router