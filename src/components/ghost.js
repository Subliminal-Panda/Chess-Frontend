﻿import React, {useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Ghost(props) {
    const { file, rank, position, type, move, initposition, team, capture, castle, promote, capturing, castling, promoting, placeholder } = props

    const determineFunctions = () => {
        if(placeholder) {
            null;
        } else if(!placeholder) {
            if(capture) {
                capturing(file, rank, position)
            }
            if(castle) {
                castling(position)
            }
            if(promote) {
                promoting(file, rank, position)
            }
            if(!promote) {
                move(file, rank, position);
            }
        }
    }

    const determineClassName = () => {
        const first = capture ? "capture" : null;
        const second = castle ? "castle" : null;
        const third = promote ? "promote" : null;
        // const fourth = placeholder ? "placeholder" : null;
        const fifth = "ghost";
        const allClasses = `${first} ${second} ${third} ${fifth}`
        return(allClasses)
    }

    return (
        <div
        onClick={() => determineFunctions()}
        initposition={initposition}
        key={`ghost${position}`}
        rank={rank}
        file={file}
        position={position}
        className={determineClassName()}
        style={{
            gridArea: `${position}`,
        }}>
        <FontAwesomeIcon
        icon={ type }
        />
        </div>
    )
}
