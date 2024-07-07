import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import Room from '../components/Room';
import Loading from '../components/loading';
import moment from 'moment';
import { DatePicker, Space } from 'antd';
import Container from 'react-bootstrap/esm/Container';
const { RangePicker } = DatePicker;

const HomeScreen = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();
  const [duplicateRooms, setDuplicateRooms] = useState([]);
  const [searchKey,setSearchKey]=useState('')
  const [type,setType]=useState('all')
  const user=JSON.parse(localStorage.getItem('currentUser'))

const token=user.token
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log(`${user},token:${token}`)
        const headers={'Authorization':`Bearer ${token}`};
        console.log(`headera:${headers.Authorization}`)
        const data=(await axios.get('http://localhost:5500/api/rooms',{headers})).data.rooms
        setRooms(data);
        setDuplicateRooms(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const filterByDates = (dates) => {
    setFromDate(moment(dates[0].$d).format('DD-MM-YYYY'));
    setToDate(moment(dates[1].$d).format('DD-MM-YYYY'));

    const filteredRooms = duplicateRooms.filter((room) => {
      const hasBookingsWithinRange = room.currentBooking.some((booking) => {
        return (
          moment(booking.fromDate).isBetween(fromDate, toDate, null, "[]") ||
          moment(booking.toDate).isBetween(fromDate, toDate, null, "[]") ||
          (moment(booking.fromDate).isSame(fromDate) &&
            moment(booking.fromDate).isSame(toDate) &&
            moment(booking.toDate).isSame(fromDate) &&
            moment(booking.toDate).isSame(toDate))
        );
      });

      return !hasBookingsWithinRange;
    });

    setRooms(filteredRooms);
  };

  const filterBySearch=()=>{
    const tempRooms=duplicateRooms.filter(room=>room.name.toLowerCase().includes(searchKey.toLowerCase()))
   setRooms(tempRooms)
  }

  const filterByType=(e)=>{
    setType(e)
    if(e!=='all'){
        const tempRooms=duplicateRooms.filter(room=>room.type.toLowerCase()===e.toLowerCase())
    setRooms(tempRooms)
    }else{
        setRooms(duplicateRooms)

    }
  }

  return (
    <>
      <Container className="d-flex gap-5 mt-5 shadow p-3 mb-5 bg-white rounded">
        <Space className='col md-3' direction="vertical" size={12}>
          <RangePicker onChange={filterByDates} />
        </Space>
        <div className='col md-5'>
        <input type='text' className='form-control' placeholder='search-rooms'
        value={searchKey}
        onChange={e=>setSearchKey(e.target.value)}
        onKeyUp={filterBySearch}
        />
        </div>
        <select className='col md-3 form-control' value={type} onChange={(e)=>filterByType(e.target.value)}>
            <option value={'all'}>all</option>
            <option value={'delux'}>delux</option>
            <option value={'non-delux'}>non-delux</option>
        </select>
      </Container>

      {loading ? (
        <Loading />
      ) : (
        <div>
          <h2>{rooms.length} rooms found</h2>
          {rooms.map((room) => (
            <Room room={room} key={room._id} fromDate={fromDate} token={token}toDate={toDate} />
          ))}
        </div>
      )}
    </>
  );
};

export default HomeScreen;
