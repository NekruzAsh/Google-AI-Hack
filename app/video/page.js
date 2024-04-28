'use client'
import React, { useState, useRef, useEffect } from 'react';

const Page = () => {
    const [display, setDisplay] = useState(false);
    const joinBtnRef = useRef(null);
    const streamControlsRef = useRef(null);
    const [key, setKey] = useState("");
    const [localTracks, setLocalTracks] = useState({}); 
    const [client, setCLient] = useState();
    const [AgoraRTC, setAgoraRTC] = useState()
    let remoteUsers = [];

    useEffect(() => {
        const initSdk = async () => {
            let RTC = (await import('agora-rtc-react')).default;
            setAgoraRTC(RTC)
            setCLient(RTC.createClient({ mode: 'rtc', codec: "vp8" }));
        }
        initSdk();
    }, []);
    

    let joinAndDisplayLocalStream = async () => {

        if(client)
        {
            client.on('user-published', handleUserJoined)

        let UID = await client.join("8f8841f090f64a6aaa64463c34fe0e8a", "main", "007eJxTYPgubXMhdlrJ+vsnebhuqG1a03ey72r+F3l3g1l7xTf8uMSgwGCRZmFhYphmYGmQZmaSaJaYmGhmYmJmnGxskpZqkGqRWDdfL60hkJGB7+8mVkYGCATxWRhyEzPzGBgAssggtA==+FsYa3XFcTXBM4eerF2JcKDBZpFhYmhmkGlgZpZiaJZomJiWYmJmbGycYmaakGqRaJObN00xoCGRnKoucxMEIhiM/CkJuYmcfAAAAzdh71", null);
        const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
        let playerContainer = document.createElement('div');
        playerContainer.className = 'video-container';
        playerContainer.id = `user-container-${UID}`;

        let player = document.createElement('div');
        player.className = 'video-player';
        player.id = `user-${UID}`;

        playerContainer.appendChild(player);

        document.getElementById('video-streams').appendChild(playerContainer);

        tracks[1].play(`user-${UID}`)

        setLocalTracks(tracks);
        
        await client.publish([tracks[0], tracks[1]]);
        }

    }

    let joinStream = async () => {
        await joinAndDisplayLocalStream();
        joinBtnRef.current.style.display = 'none';
        streamControlsRef.current.style.display = 'flex';
    }

    let handleUserJoined = async (user, mediaType) => {
        if(client) {
            remoteUsers[user.uid] = user;
            await client.subscribe(user, mediaType);
            if(mediaType === "video") {
                let playerContainer = document.getElementById(`user-container-${user.uid}`);
                if(playerContainer !== null) {
                    playerContainer.remove();
                }
    
                playerContainer = document.createElement('div');
                playerContainer.className = 'video-container';
                playerContainer.id = `user-container-${user.uid}`;
    
                let player = document.createElement('div');
                player.className = 'video-player';
                player.id = `user-${user.uid}`;
                playerContainer.appendChild(player);
    
                document.getElementById('video-streams').appendChild(playerContainer);
    
                user.videoTrack.play(`user-${user.uid}`);
            }
    
            if(mediaType === "audio") {
                user.audioTrack.play();
            }
        }
    }



    return (
        <div>
            <button ref={joinBtnRef} id="join-btn" onClick={joinStream}>Join Stream</button>
            <div id="stream-wrapper">
                <div id="video-streams">
                    
                </div>
                <div id="stream-controls" ref={streamControlsRef}>
                    <button className='btn' id="leave-btn">Leave Stream</button>
                    <button className='btn' id="mic-btn">Mic On</button>
                    <button className='btn' id="camera-btn">Camera On</button>
                </div>
            </div>
        </div>
    );
}

export default Page;
