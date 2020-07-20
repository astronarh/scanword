import React from "react";
import Scanword from "./Scanword";
import './Scanwords.css'

const COLUMNS = {
    title: {
        label: 'Title',
        width: '20%',
    },
    author: {
        label: 'Author',
        width: '20%',
    },
    size: {
        label: 'Size',
        width: '20%',
    },
    difficulty: {
        label: 'Difficulty',
        width: '20%',
    },
    open: {
        width: '20%',
    },
};

const ScanwordsHeader = ({columns}) =>
    <div className="scanwords-header">
        {Object.keys(columns).map(key =>
                <span
                    key={key}
                    style={{width: columns[key].width}}
                >
        {columns[key].label}
      </span>
        )}
    </div>

const Scanwords = ({scanwords, open}) =>
    <div className="scanwords">
        <ScanwordsHeader columns={COLUMNS}/>
        {(scanwords || []).map(scanword =>
            <Scanword
                key={scanword.objectID}
                scanword={scanword}
                columns={COLUMNS}
                open={open}/>
        )}
    </div>

export default Scanwords;
