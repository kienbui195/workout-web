import * as React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './AttendanceCalendar.css';

type AttendanceCalendarProps = {
		initialMarkedDates?: string[]; // ngày đã điểm danh trước đó
		onCheckIn?: (markedDate: string[]) => void;
};

const AttendanceCalendar: React.FC<AttendanceCalendarProps> = ({initialMarkedDates = [], onCheckIn}) => {
		// State lưu trữ danh sách các ngày đã điểm danh
		const [markedDates, setMarkedDates] = React.useState<string[]>(initialMarkedDates);

		// Hàm xử lý khi người dùng chọn một ngày
		const handleDateClick = (date: Date) => {
				const dateString = date.toISOString().split('T')[0]; // format yyyy-mm-dd

				// Kiểm tra nếu ngày đã được chọn, thì bỏ chọn; nếu chưa, thì đánh dấu
				setMarkedDates(prev =>
						prev.includes(dateString)
								? prev.filter(d => d !== dateString) // Bỏ chọn ngày nếu đã được chọn trước đó
								: [...prev, dateString] // Thêm ngày mới vào danh sách điểm danh
				);
		};

		const tileContent = ({date, view}: { date: Date; view: string }) => {
				if (view === 'month') {
						const dateString = date.toISOString().split('T')[0];
						if (markedDates.includes(dateString)) {
								return <div className="marked">✓</div>; // Icon đánh dấu đã điểm danh
						}
				}
				return null;
		};

		React.useEffect(() => {
				onCheckIn && onCheckIn(markedDates)
		}, [markedDates])

		return (
				<Calendar
						onClickDay={handleDateClick}
						tileContent={tileContent} // Gọi hàm tileContent để custom các ô ngày
				/>
		)

}

export default AttendanceCalendar
