import React, {useState, useEffect} from 'react';
import {CircularProgressbar, buildStyles} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

type CountdownTimerProps = {
		workoutTime: number; // thời gian tập luyện tính bằng giây
		restTime: number; // thời gian nghỉ tính bằng giây
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({workoutTime, restTime}) => {
		const [timeLeft, setTimeLeft] = useState(workoutTime);
		const [isWorkout, setIsWorkout] = useState(true); // true nếu đang ở thời gian tập luyện, false nếu ở thời gian nghỉ
		const [isRunning, setIsRunning] = useState(false); // để biết liệu countdown có đang chạy không

		useEffect(() => {
				let timer: NodeJS.Timeout;

				if (isRunning) {
						timer = setInterval(() => {
								setTimeLeft(prev => {
										if (prev > 1) {
												return prev - 1;
										} else {
												// Nếu hết thời gian, chuyển sang trạng thái tiếp theo
												setIsWorkout(!isWorkout);
												return isWorkout ? restTime : workoutTime;
										}
								});
						}, 1000);
				}

				// Dừng timer khi không chạy
				return () => clearInterval(timer);
		}, [isRunning, isWorkout, workoutTime, restTime]);

		// Bắt đầu countdown
		const handleStart = () => setIsRunning(true);

		// Dừng countdown
		const handleStop = () => {
				setIsRunning(false);
				setIsWorkout(true);
				setTimeLeft(workoutTime);
		};

		function handleSave() {
				localStorage.setItem('time', JSON.stringify({main: workoutTime, relax: restTime}));
		}

		useEffect(() => {
				handleSave()
		}, [workoutTime, restTime]);

		// Tính phần trăm cho vòng tròn countdown
		const percentage = (timeLeft / (isWorkout ? workoutTime : restTime)) * 100;

		return (
				<div className="flex flex-col items-center">
						<div style={{width: 150, height: 150, marginBottom: '1rem'}}>
								<CircularProgressbar
										value={percentage}
										text={`${timeLeft}`}
										styles={buildStyles({
												textSize: '20px',
												pathColor: isWorkout ? '#1E3A8A' : '#F97316', // Màu xanh dương đậm cho workout, cam cho rest
												textColor: isWorkout ? '#1E3A8A' : '#F97316', // Màu số đếm
												trailColor: '#ddd',
										})}
								/>
						</div>
						<div className="flex space-x-4">
								<button
										onClick={handleStart}
										className="px-4 py-2 text-white bg-blue-500 rounded"
										disabled={isRunning}
								>
										Start
								</button>
								<button
										onClick={handleStop}
										className="px-4 py-2 text-white bg-red-500 rounded"
										disabled={!isRunning}
								>
										Stop
								</button>
								<button
										onClick={handleSave}
										className="px-4 py-2 text-white bg-green-500 rounded"
								>
										Save
								</button>
						</div>
				</div>
		);
};

export default CountdownTimer;
