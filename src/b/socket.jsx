import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
const SocketComponent = () => {
    const [name, setName] = useState('');
    const [disp, setDisp] = useState([]);
    const socket = io("http://localhost:5000", {
        transports: ['websocket'], // Use WebSocket directly
    });

    useEffect(() => {
        // Handle socket events
        const handleSend = (data) => {
            console.log(data);
            setDisp(data);
        };

        socket.on('connect', () => {
            console.log("Connected to server");
        });

        socket.on('send', handleSend);

        // Cleanup to avoid memory leaks
        return () => {
            socket.off('send', handleSend);
            socket.disconnect();
        };
    }, [socket]);

    const handleSubmit = () => {
        // if (name.trim()) {
            socket.emit('message', name);
        // }
    };

    const handleEdit = (id, active) => {
        socket.emit('active', { id, active });
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                style={{zIndex:100}}
                placeholder="Message"
                onChange={(e) => setName(e.target.value)}
            />
            <button onClick={handleSubmit}>Send</button>
            <br />
            <br />
            <br />
            {disp.length > 0 && (
                <ul >
                    {disp.map((user) => (
                        <div key={user?.id}>
                            <li>
                                {user.id}: {user.data}
                            </li>
                            <input
                                type="checkbox"
                                checked={user.active}
                                onChange={() => handleEdit(user.id, !user.active)}
                            />
                        </div>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SocketComponent;
