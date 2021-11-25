import React, { useEffect, useState } from "react";
import sunny from 'features/diary/images/sunny.png'
import diary from 'features/diary/images/a.png'
import "features/common/font/font.scss"
import styled from 'styled-components'
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { LayOut } from 'features/common'
import 'features/diary/style/Diary.scss'
import { DatePicker } from '@mui/lab';
import Test from "./Test";
import { margin } from "@mui/system";

export default function Diary() {
    const [test, setTest] = useState(new Date())
    const today = new Date()
    const dateToString = (day) => day.toISOString().substring(0, 10)
    return (
        <LayOut>
            <div class="diary_wrapper">
                <div class="diary_container">
                    <div style={{ borderCollapse: "collapse" }}>
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                views={['day']}
                                label="날짜 이동"
                                value={test}
                                maxDate={today}
                                onChange={(newValue) => {
                                    setTest(newValue);
                                }}
                                renderInput={(params) => <TextField {...params} helperText={null} />}
                            />
                        </LocalizationProvider>
                    </div>
                    <Div>
                    <img       style={{ width: '15%', cursor: "pointer", marginLeft:"-106px" }}
                                            src={require("features/diary/images/today.png").default} onClick={() => setTest(today)} />
                        <table border='1px' style={{ border: "wheat" }}>
                            <TR>
                                <td><img class="wobble-hor-bottom" style={{ width: '20%', cursor: "pointer" }} src={require("features/diary/images/fingerl.png").default} onClick={() => setTest(new Date(test.setDate(test.getDate() - 1)))} /></td>
                                <td style={{ width: 'inherit' }} ><DiarySmallText>{test.toLocaleString('ko-KR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                    weekday: 'long'
                                })}</DiarySmallText></td>
                                <td ><DiarySmallText>맑음</DiarySmallText><img style={{ width: "100px" }} src={sunny} /></td>
                                <td >{test.toISOString().substring(0, 10) < today.toISOString().substring(0, 10)}
                                    {dateToString(test) < dateToString(today)
                                        ? <><img class="wobble-hor-bottom"
                                            style={{ width: '20%', cursor: "pointer", visibility: "visible" }}
                                            src={require("features/diary/images/fingerr.png").default}
                                            onClick={() => setTest(new Date(test.setDate(test.getDate() + 1)))} />
                                        </>
                                        : <img class="wobble-hor-bottom"
                                            style={{ width: '20%', cursor: "pointer", visibility: "hidden" }}
                                            src={require("features/diary/images/fingerr.png").default} />}

                                </td>
                            </TR>
                            <tr>
                                <td colSpan='4'><DiarySmallText>제목 : 안주현의 그림 일기</DiarySmallText></td>
                            </tr>
                            <tr>
                                <td colSpan='4'><img class='diary-img' src={diary} /></td>
                            </tr>
                        </table>
                        <div>
                            <Test />
                        </div>
                    </Div>
                </div>
            </div>
        </LayOut>)
}

const DiaryText = styled.div`
    font-family: 'UhBeeRami';
    font-size: 20px;
    font-weight: bold;
`
const DiarySmallText = styled.div`
    font-family: 'UhBeeRami';
    font-size: 20px;
    font-weight: bold;
`
const Div = styled.div`
    text-align: center;
    width: 1600px;
`
const TR = styled.tr`
width: 50%

`
