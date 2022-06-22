import { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';

// header for Data Grid
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'common_name',
        headerName: 'Common Name',
        width: 150,
        editable: false,
    },
    {
        field: 'name',
        headerName: 'Name',
        type: 'string',
        width: 110,
        editable: false,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'height',
        headerName: 'Height',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'rating',
        headerName: 'Rating',
        type: 'number',
        width: 110,
        editable: false,
    },
    {
        field: 'weight',
        headerName: 'Weight',
        type: 'number',
        width: 110,
        editable: false,
    },
];

export const Home = () => {
    let api_key = "248feedd-bc8d-4d3b-8d32-0fa2c8fe3eea";
    let url = "https://futdb.app/api/players";

    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetchingPlayers();
    }, [])

    const fetchingPlayers = () => {
        axios({
            url: url,
            method: 'get',
            headers: {
                "X-AUTH-TOKEN": api_key
            }
        })
            .then(res => {
                setPlayers(res.data.items)
            })
            .catch(res => {
                console.log(res.data)
            })
    }

    const sortingPlayers = () => {
        axios({
            url: `${url}/latest/21318`,
            method: 'get',
            headers: {
                "X-AUTH-TOKEN": api_key
            }
        })
            .then(res => {
                setPlayers(res.data.items)
            })
            .catch(res => {
                console.log(res.data)
            })
    }

    return (
        <Box sx={{ height: 400, width: '100%' , my:8}}>
            <Button color="inherit" onClick={() => fetchingPlayers()}>Intial Sorting</Button>
            <Button color="inherit" onClick={() => sortingPlayers()}>Get lastest players since specific id</Button>
            <DataGrid
                rows={players}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
            />
        </Box>
    );
}
