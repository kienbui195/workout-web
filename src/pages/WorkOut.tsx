import * as React from "react";
import Paper from "../components/Paper";
import Calendar from "../components/Calendar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "../components/ui/collapsible";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import CountdownTimer from "../components/Countdown";
import YoutubePlayer from "../components/YoutubePlayer";
import { CONTENT } from "../lib/helper";
import axios from "axios";
import { createQuery } from "../lib/utils";
import { IWorkout } from "../types";
import Loading from "../components/Loading";

export default function WorkOut() {
  const [historyCheckIn, setHistoryCheckIn] = React.useState(localStorage.getItem("checkIn") ? JSON.parse(localStorage.getItem("checkIn") as string) : []);
  const timeStorage = localStorage.getItem("time");
  const [time, setTime] = React.useState({
    main: timeStorage ? JSON.parse(timeStorage as string).main : 0,
    relax: timeStorage ? JSON.parse(timeStorage as string).relax : 0
  });
  const [pageData, setPageData] = React.useState<IWorkout[]>([]);
  const [loading, setLoading] = React.useState(true)

  function handleCheckIn(checkList: string[]) {
    setHistoryCheckIn(checkList);
    localStorage.setItem("checkIn", JSON.stringify(checkList));
  }

  React.useEffect(() => {
    function onLeavePage() {
      localStorage.setItem("time", JSON.stringify(time));
    }

    window.addEventListener("beforeunload", onLeavePage);

    return () => window.removeEventListener("beforeunload", onLeavePage);
  }, []);

  async function getPageData() {
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/workout-page?${createQuery({
        populate: {
          collections: {
            populate: {
              exercises: {
                populate: {
                  exercises: "*"
                }
              }
            }
          }
        }
      })}`);

      setPageData(res.data.data.attributes.collections);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    getPageData();
  }, []);

  return (
    <section className={"proj-container grid sm:grid-cols-4 grid-cols-1 gap-4 pt-10"}>
      <Paper className={"sm:col-span-3"} body={
        <React.Fragment>
          {!loading ? pageData.map((item, i) => (
            <React.Fragment key={i}>
              <div className={"text-xl font-bold"}>{`${i + 1}. ${item.name}`}</div>
              {item.exercises.map((_item, _i) => (
                <Collapsible
                  className="space-y-2"
                  key={_i}
                >
                  <div className="flex items-center justify-between space-x-4 px-4">
                    <h4 className="text-xl font-semibold">
                      {_item.name}
                    </h4>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">Toggle</span>
                      </Button>
                    </CollapsibleTrigger>
                  </div>
                  <CollapsibleContent className="space-y-2">
                    <div className="pl-6 font-semibold text-blue-500">
                      {`Định dạng: ${_item.desc}`}
                    </div>
                    <div className="pl-6 font-semibold text-green-500">
                      {`Thời lượng: ${_item.duration}`}
                    </div>
                    <div className={"pl-6 font-bold"}>Bài tập</div>
                    <div className={"pl-6"}>
                      {_item.exercises.data.map((_i, idx) => (
                        <Collapsible
                          className="space-y-2"
                          key={idx}
                        >
                          <div className="flex items-center justify-between space-x-4 px-4">
                            <h4 className="text-sm font-semibold">
                              {_i.attributes.name}
                            </h4>
                            <CollapsibleTrigger asChild>
                              <Button variant="ghost" size="sm" className="w-9 p-0">
                                <ChevronsUpDown className="h-4 w-4" />
                                <span className="sr-only">Toggle</span>
                              </Button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent className="space-y-2 flex justify-center">
                            <YoutubePlayer videoId={_i.attributes.videoId} />
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              ))}

            </React.Fragment>
          )) : <Loading/>}
        </React.Fragment>
      } />
      <Paper className={"sticky top-0"} body={
        <div>
          <div className={"font-bold"}>
            <div className={"text-xl capitalize"}>Check in</div>
            <div className={""}>{`You are checked ${historyCheckIn.length} days.`}</div>
          </div>
          <Calendar initialMarkedDates={historyCheckIn} onCheckIn={handleCheckIn} />
          <div className={"mt-10"}>
            <div className={"font-bold text-xl"}>Đồng hồ đếm ngược</div>
            <div className={"flex flex-col justify-items-stretch space-y-2"}>
              <div className={"font-bold"}>Set thời gian tập:</div>
              <Input type={"number"} value={time.main}
                     onChange={(e) => setTime(prev => ({ ...prev, main: +e.target.value }))} />
            </div>
            <div className={"flex flex-col justify-items-stretch space-y-2"}>
              <div className={"font-bold"}>Set thời gian nghỉ:</div>
              <Input type={"number"} value={time.relax}
                     onChange={(e) => setTime(prev => ({ ...prev, relax: +e.target.value }))} />
            </div>
            <div className={"mt-10"}>
              <CountdownTimer workoutTime={time.main} restTime={time.relax} />
            </div>
          </div>
        </div>
      } />
    </section>
  );
}
