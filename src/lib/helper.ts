export const BAI_TAP = [
		{
				id: 1,
				name: "Burpees",
				desc: "",
				video: "Md_f479pZ20"
		},
		{
				id: 2,
				name: "Jumping Jacks",
				desc: "",
				video: "NUsqyASuyeM"
		},
		{
				id: 3,
				name: "Mountain Climbers",
				desc: "",
				video: "aMc1Qi4-jfM"
		},
		{
				id: 4,
				name: "Squat Jumps",
				desc: "",
				video: "cEUnlq1CnBA"
		},
		{
				id: 5,
				name: "Plank to Push-up",
				desc: "",
				video: "TQ_x9ddl1_I"
		},
		{
				id: 6,
				name: "Push-ups (Chống đẩy)",
				desc: "",
				video: ""
		},
		{
				id: 7,
				name: "Tricep Dips (Chống tay ghế tập cơ tay sau)",
				desc: "",
				video: ""
		},
		{
				id: 8,
				name: "High Plank Hold (Plank cao giữ tay)",
				desc: "",
				video: ""
		},
		{
				id: 9,
				name: "Shoulder Taps (Plank chạm vai)",
				desc: "",
				video: ""
		},
]


export const CONTENT = [
		{
				title: "Ngày 1: HIIT Toàn Thân (Full Body)",
				desc: "30 giây tập cường độ cao / 15 giây nghỉ, lặp lại 4 vòng cho mỗi bài",
				duration: "20-25 phút tổng cộng, bao gồm khởi động và giãn cơ",
				exercises: [
						{
								...BAI_TAP.filter(item => item.id === 1)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 2)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 3)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 4)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 5)[0]
						},
				]
		},
		{
				title: "Ngày 2: Bodyweight Training - Tập trung phần thân trên",
				desc: "3 set mỗi bài, mỗi set 10-12 lần lặp.",
				duration: "20-25 phút tổng cộng, bao gồm khởi động và giãn cơ",
				exercises: [
						{
								...BAI_TAP.filter(item => item.id === 6)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 7)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 8)[0]
						}, {
								...BAI_TAP.filter(item => item.id === 9)[0]
						}
				]
		},
		{
				title: "Ngày 3: HIIT Tập trung phần thân dưới",
				desc: "30 giây tập cường độ cao / 15 giây nghỉ, lặp lại 4 vòng cho mỗi bài.",
				duration: "20-25 phút tổng cộng, bao gồm khởi động và giãn cơ",
				exercises: [
						{
								name: "Squat (Squats thông thường)",
								desc: "",
								video: ""
						}, {
								name: "Lunges (Chùng chân)",
								desc: "",
								video: ""
						}, {
								name: "Jump Lunges (Nhảy chùng chân)",
								desc: "",
								video: ""
						}, {
								name: "Glute Bridge (Cầu mông)",
								desc: "",
								video: ""
						}, {
								name: "Wall Sit (Ngồi dựa tường)",
								desc: "",
								video: ""
						}
				]
		},
		{
				title: "Ngày 4: Bodyweight Training - Tập trung vào cơ bụng",
				desc: " 3 set mỗi bài, mỗi set 15-20 lần lặp.",
				duration: "20-25 phút tổng cộng, bao gồm khởi động và giãn cơ",
				exercises: [
						{
								name: "Sit-ups (Gập bụng)",
								desc: "",
								video: ""
						}, {
								name: "Russian Twists (Xoay người kiểu Nga)",
								desc: "",
								video: ""
						}, {
								name: "Bicycle Crunches (Đạp xe trên không)",
								desc: "",
								video: ""
						}, {
								name: "Leg Raises (Nâng chân)",
								desc: "",
								video: ""
						}, {
								name: "Plank 1 phút",
								desc: "",
								video: ""
						}
				]
		},
		{
				title: "Ngày 5: HIIT Toàn Thân (Full Body)",
				desc: "40 giây tập cường độ cao / 20 giây nghỉ, lặp lại 3-4 vòng",
				duration: "20-30 phút",
				exercises: [
						{
								name: "High Knees (Chạy nâng cao gối tại chỗ)",
								desc: "",
								video: ""
						}, {
								name: "Jump Squats (Nhảy squat)",
								desc: "",
								video: ""
						}, {
								name: "Burpees",
								desc: "",
								video: ""
						}, {
								name: "Mountain Climbers (Leo núi)",
								desc: "",
								video: ""
						}, {
								name: "Plank to Push-up",
								desc: "",
								video: ""
						}
				]
		},
		{
				title: "Ngày 6: Bodyweight Training - Toàn Thân",
				desc: " 3 set mỗi bài, mỗi set 10-15 lần lặp",
				duration: "20-25 phút.",
				exercises: [
						{
								name: "Chống đẩy (Push-ups)",
								desc: "",
								video: ""
						}, {
								name: "Squats",
								desc: "",
								video: ""
						}, {
								name: "Lunges (Chùng chân)",
								desc: "",
								video: ""
						}, {
								name: "Plank",
								desc: "",
								video: ""
						}, {
								name: "Plank to Push-up",
								desc: "",
								video: ""
						}
				]
		},
		{
				title: "Ngày 7: Nghỉ ngơi hoặc tập giãn cơ nhẹ",
				desc: "Thực hiện giãn cơ toàn thân nhẹ nhàng trong 10-15 phút để giúp cơ thể phục hồi",
				duration: "",
				exercises: []
		}
]
