import React, { useEffect } from "react";

const NaverMap = () => {
    useEffect(() => {
        // 지도 초기 위치 세팅
        const mapOptions = {
            center: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울시청 좌표
            zoom: 10,
        }

        //네이버 지도 객체 생성
        const map = new window.naver.maps.Map('map', mapOptions);

        //마커 추가
        const marker = new window.naver.maps.Marker({
            position: new window.naver.maps.LatLng(37.5665, 126.9780), // 서울시청
            map: map,
        });
    }, []);

    return (
        <div>
            <div
                id="map"
                style={{width: '100%', height:'500px'}} // 맵 크기 설정
            ></div>
        </div>
    )
}

export default NaverMap;