'use client'
import React, { useState, useRef, useEffect } from 'react';

const Page = () => {
    const joinBtnRef = useRef(null);
    const streamControlsRef = useRef(null);
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
    

    const joinAndDisplayLocalStream = async () => {

        if(client)
        {
            if (client.connectionState === 'CONNECTED') 
            {
                await client.leave();
            }
            client.on('user-published', handleUserJoined)
            client.on('user-left', handleUserLeft)

            let UID = await client.join("8f8841f090f64a6aaa64463c34fe0e8a", "main", "007eJxTYPgubXMhdlrJ+vsnebhuqG1a03ey72r+F3l3g1l7xTf8uMSgwGCRZmFhYphmYGmQZmaSaJaYmGhmYmJmnGxskpZqkGqRWDdfL60hkJGB7+8mVkYGCATxWRhyEzPzGBgAssggtA==+FsYa3XFcTXBM4eerF2JcKDBZpFhYmhmkGlgZpZiaJZomJiWYmJmbGycYmaakGqRaJObN00xoCGRnKoucxMEIhiM/CkJuYmcfAAAAzdh71", null);
            const tracks = await AgoraRTC.createMicrophoneAndCameraTracks();
            let playerContainer = document.getElementById(`user-container-${UID}`);
            if(playerContainer !== null) 
            {
                playerContainer.remove();
            }

            playerContainer = document.createElement('div');
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

    const joinStream = async () => {
        await joinAndDisplayLocalStream();
        joinBtnRef.current.style.display = 'none';
        streamControlsRef.current.style.display = 'flex';
    }

    const handleUserJoined = async (user, mediaType) => {
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

    const handleUserLeft = async (user) =>
    {
        delete remoteUsers[user.uid]
        document.getElementById(`user-container-${user.uid}`).remove();
    }

    const leaveAndRemoveLocalStream = async () =>
    {
        if(client)
        {
            for(let i = 0; localTracks.length > i; i++)
            {
                localTracks[i].stop()
                localTracks[i].close()
            }
            await client.leave()
            
            document.getElementById('join-btn').style.display = 'block'
            document.getElementById('stream-controls').style.display = 'none'
            document.getElementById('video-streams').innerHTML = ''
        }

    }

    const toggleMic = async (e) =>
    {
        if(localTracks[0].muted)
        {
            await localTracks[0].setMuted(false);
            e.target.innerText = 'Mic on'
            e.target.style.backgroundColor = 'white'
        }
        else
        {
            await localTracks[0].setMuted(true);
            e.target.innerText = 'Mic off'
            e.target.style.backgroundColor = '#EE4B2B'
        }
    }

    const toggleCamera = async (e) =>
    {
        if(localTracks[1].muted)
        {
            await localTracks[1].setMuted(false);
            e.target.innerText = 'Camera on'
            e.target.style.backgroundColor = 'white'
        }
        else
        {
            await localTracks[1].setMuted(true);
            e.target.innerText = 'Camera off'
            e.target.style.backgroundColor = '#EE4B2B'
        }
    }

    return (
        <div>
            <button ref={joinBtnRef} id="join-btn" onClick={joinStream}>Join Stream</button>
            <div id="stream-wrapper">
                <div id="video-streams">
                </div>
                <div id="stream-controls" ref={streamControlsRef}>
                    <button className='btn' onClick={leaveAndRemoveLocalStream} id="leave-btn">Leave Stream</button>
                    <button className='btn' onClick={toggleMic} id="mic-btn">Mic On</button>
                    <button className='btn' onClick={toggleCamera} id="camera-btn">Camera On</button>
                </div>
            </div>
        </div>
    );
}

export default Page;
