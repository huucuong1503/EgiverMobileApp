import { StyleSheet, Modal,View , Image,ScrollView, Platform,DateTimePicker, ImageBackground} from 'react-native';
import * as React from 'react';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
// import {waitingAnis} from './components/waitingAni';
import { Provider, Searchbar ,Snackbar, Text,TouchableRipple,Card,SegmentedButtons,Switch, Button} from 'react-native-paper';
import { NavigationContainer,useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { SafeAreaView } from 'react-native-safe-area-context';
// import DateTimePicker from '@react-native-community/datetimepicker'
import DatePicker from 'react-native-date-picker'
import { Dropdown } from 'react-native-element-dropdown';


const optionDateMonth = [
  { label: '                     Theo ngày', value: '1' },
  { label: '                     Theo tháng', value: '2' },
];

function Basic() {
  const [value, setValue] = React.useState([]);
  const [valuehpd, setValuehpd] = React.useState('');
  
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [value2, setValue2] = React.useState(null);
  const [backgroundColor, setBackgroundColor] = React.useState('#fff'); // Initial white background
  const [backgroundColor2, setBackgroundColor2] = React.useState('#fff'); // Initial white background

  // const [date, setDate] = React.useState(new Date()); // Initial white background
  const [mode, setMode] = React.useState('date'); // Initial white background
  const [show, setShow] = React.useState(false); // Initial white background
  const [text, setText] = React.useState('  01  |  05  |  2024  '); // Initial white background
  const [time, setTime] = React.useState('  08  |  00'); // Initial white background

  const [isModalVisible,setIsModalVisible] = React.useState(false)

  // const onChange=(event,selectedDate)=>{
  //   const currentDate =selectedDate || date;
  //   setShow(Platform.OS==='ios');
  //   setDate(currentDate)

  //   let tempDate=new Date(currentDate);
  //   let fDate =tempDate.getDate()+'/'+ (tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
  //   let fTime = tempDate.getHours()+' giờ '+tempDate.getMinutes()+' phút ';
  //   setText('\t'+fDate)
  //   setTime('\t'+fTime)
  //   console.log(fDate+' ('+fTime+')')
  // }
  const showMode=(currentMode)=>{
    setShow(true)
    setMode(currentMode)
  }
  const handleCardPress = () => {
    setBackgroundColor(backgroundColor === '#fff' ? 'lightgreen' : '#fff'); // Toggle color
  };
  const handleCardPress2 = () => {
    setBackgroundColor2(backgroundColor2 === '#fff' ? 'lightgreen' : '#fff'); // Toggle color
  };
  const navigation = useNavigation();
  
  const HomeHandler = () => {
    navigation.navigate('Home');
  };
  const ConfirmHandler = () => {
    navigation.navigate('Home');
  };
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [date, setDate] = React.useState(new Date())
  const [date2, setDate2] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)



  return (
      <SafeAreaView style={styles.container}>
        

            <TouchableRipple
      style={[styles.mainContent, styles.paymentCell1]}
      onPress={() => {console.log('Pressed');HomeHandler();}}
      rippleColor="rgba(0, 0, 0, .32)"
    >
        <View style={[styles.paymentCell1]}>
            <MaterialCommunityIcons name="arrow-left" color='black' size={32} />
            <Text style={{fontWeight: 'bold',fontSize:16}}>Hỗ trợ hoạt động sinh sống cơ bản hằng ngày cho người cao tuổi</Text>
        </View>
    </TouchableRipple>

        <View style={[styles.locationHead, styles.paymentCell1]}>
          <MaterialCommunityIcons name="map-marker-radius" color='red' size={40} />
          <View>
            <Text style={{fontWeight:'bold'}}>Đại học Kinh tế TP.HCM (UEH N)</Text>
            <Text style={{fontSize:12}}>Khu Chức Năng Số 15, Đô Thị Mới Nam Thành Phố...</Text>
          </View>
          <MaterialCommunityIcons name="arrow-right" color='black' size={32} />
        </View>
        
        <View style={[styles.mainContent, styles.paymentCell2]}>
          <View style={{flex:1,flexDirection:'row',width:'90%',flexBasis:30}}>
          <Text style={{fontWeight:'bold', marginTop:'2%', color:'#00205D',fontSize:18}}>
          TÙY CHỌN DỊCH VỤ
          </Text>
          </View>
          
          <View style={{flex:1,flexDirection:'row',marginLeft:'10%',marginRight:'10%',flexBasis:50}}>
          <View style={{flex:1}}>
          <Card style={{backgroundColor:'#00205D',flex:1,borderRadius:30,flexDirection:'row',justifyContent:'center',marginBottom:'3%'}}>
            <Card.Content style={{flex:1,width:300}}>
            <Dropdown
              style={{height:'90%'}}
              selectedTextStyle={{color:'white',fontWeight:'bold'}}
              placeholderStyle={{color:'white',fontWeight:'bold'}}
              iconStyle={styles.iconStyle}
              data={optionDateMonth}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="      Chọn theo ngày hoặc tháng"
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
            </Card.Content>
          </Card>

          </View>

          </View>

          <View style={{flex:1,flexDirection:'row',width:'80%',flexBasis:50, marginTop:'2%'}}>
          <SegmentedButtons
              value={valuehpd}
              style={styles.group}
              onValueChange={setValuehpd}
              buttons={[
                {
                  style: styles.button,
                  value: '1',
                  label: '4 giờ/ngày',
                },
                {
                  style: styles.button,
                  value: '2',
                  label: '8 giờ/ngày',
                }
              ]}
              />
          </View>

          <View style={{flex:1,flexDirection:'row',flexBasis:80, marginBottom:'2%'}}>

          <Card style={{flex:1,flexBasis:10, backgroundColor:'#A62A2A',borderRadius:30,marginLeft:'10%', marginRight:'5%',justifyContent:'center'}}>
            <Card.Content style={{marginLeft:'-7%'}}>
              <Text style={{fontSize:14.5, fontWeight:'bold', color:'white'}}>Tiện ích khác</Text>
            </Card.Content>
          </Card>

          <View style={{flex:1,flexBasis:100,marginRight:'5%'}}>
          <Card onPress={handleCardPress} style={{flex:1, borderRadius:30,marginBottom:'3%', backgroundColor:backgroundColor}}>
            <Card.Content style={{marginTop:'-6%', marginLeft:'10%',marginRight:'10%'}}>
              <Text style={{fontSize:16}}>Quét dọn nhà cửa</Text>
            </Card.Content>
          </Card>

          <Card onPress={handleCardPress2} style={{flex:1,borderRadius:30,backgroundColor:backgroundColor2}}>
          <Card.Content style={{marginTop:'-6%', marginLeft:'10%',marginRight:'10%'}}>
              <Text style={{fontSize:16}}>Giặt phơi quần áo</Text>
            </Card.Content>
          </Card>
          </View>
          
          </View>
        </View>
      
        <View style={[styles.mainContent, styles.paymentCell3]}>
          <View style={{flex:1, width:'100%',paddingLeft:'5%',marginTop:'2%',flexBasis:10}}>
          <Text style={{fontWeight:'bold', fontSize:18, color:'#00205D'}}>THỜI GIAN LÀM VIỆC</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',flexBasis:110}}>
            <View style={{flex:1,marginBottom:'4%', marginTop:'4%', justifyContent:'center', flexDirection:'row'}}>
            <ImageBackground source={require('./assets/calendar.png')} resizeMode='contain' style={{ flex:1,paddingLeft:'20%',paddingRight:'18%'}}>
            </ImageBackground>            
            </View>

            <View style={{flex:1,flexBasis:50}}>
           
              <View style={{flex:1, alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:19,fontWeight:'bold', flex:1}}>
                  Ngày
                </Text>
                  <Card onPress={()=>setOpen(true)} style={{borderRadius:30,marginBottom:'3%',marginRight:'-10%', backgroundColor:'#dee6e6'}}>
                    <Card.Content style={{marginTop:'-8%',marginBottom:'-8%', marginLeft:'0%',marginRight:'0%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold'}}>{text}</Text>
                    </Card.Content>
                  </Card>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  locale='vi'
                  mode='date'
                  confirmText='Nhập'
                  cancelText='Hủy'
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)

                    newDay={date}.date.getDate().toString()
                    if (newDay.length==1){
                      newDay='0'+newDay
                    }

                    newMonth=({date}.date.getMonth()+1).toString()
                    if (newMonth.length==1){
                      newMonth='0'+newMonth
                    }
                    newYear={date}.date.getFullYear().toString()

                    console.log('  '+newDay+'  |  '+newMonth+'  |  '+{date}.date.getFullYear().toString()+'  ')
                    setText('  '+newDay+'  |  '+newMonth+'  |  '+newYear+'  ')
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />

              </View>

              <View style={{flex:1,alignItems:'flex-start',flexDirection:'row'}}>
                <Text style={{fontSize:19,fontWeight:'bold',marginTop:'-1%',marginLeft:'3%',flex:1}}>
                    Giờ
                </Text>
                <Card onPress={()=>setOpen2(true)} style={{borderRadius:30,marginBottom:'3%',marginRight:'7%',marginTop:'-3%', backgroundColor:'#dee6e6'}}>
                  <Card.Content style={{marginTop:'-12%',marginBottom:'-12%', marginLeft:'0%',marginRight:'0%'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{time}</Text>
                  </Card.Content>
                </Card>
                <DatePicker
                  modal
                  open={open2}
                  date={date2}
                  locale='vi'
                  is24hourSource="locale"
                  confirmText='Nhập'
                  cancelText='Hủy'
                  title={null}
                  mode='time'
                  onConfirm={(date2) => {
                    setOpen2(false)
                    setDate2(date2)

                    newHour={date2}.date2.getHours().toString()
                    if (newHour.length==1){
                      newHour='0'+newHour
                    }

                    newMinute={date2}.date2.getMinutes().toString()
                    if (newMinute.length==1){
                      newMinute='0'+newMinute
                    }
                    console.log('  '+newHour+'  |  '+newMinute+'  ')
                    setTime('  '+newHour+'  |  '+newMinute+'  ')
                  }}
                  onCancel={() => {
                    setOpen2(false)
                  }}
                />
              </View>

            </View>

            <View style={{flex:1,flexBasis:0, marginRight:'-30%'}}>
              </View>

          </View>
        </View>
        
        <View style={[styles.mainContent, styles.paymentCell4]}>
        <View style={{flex:1, flexDirection:'row', width:'100%'}}>
            <View style={{flex:1, paddingLeft:'5%'}}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'#00205D'}}>LẶP LẠI HẰNG TUẦN</Text>
                <Text style={{fontWeight:'bold',fontSize:10}}>Tháng 4/2024</Text>
            </View>
              <View style={{flex:1, alignItems:'flex-end', paddingRight:'5%'}}>  
                <Switch  value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
          </View>
        <ScrollView horizontal={true} style={{flex:1}}>
              
             <SegmentedButtons
              multiSelect
              value={value}
              style={styles.group}
              onValueChange={setValue}
              buttons={[
                {
                  style: styles.button,
                  value: 't2',
                  label: 'Thứ 2',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't3',
                  label: 'Thứ 3',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't4',
                  label: 'Thứ 4',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't5',
                  label: 'Thứ 5',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't6',
                  label: 'Thứ 6',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't7',
                  label: 'Thứ 7',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 'cn',
                  label: 'Chủ nhật',
                  showSelectedCheck: true,
                },
              ]}
              />
          </ScrollView>
        </View>
        
        <View style={[styles.payButton, styles.paymentCell1]}>
          <View style={{flex:1}}>
              <Card onPress={()=>setIsModalVisible(true)} style={{backgroundColor:'#00205D',borderRadius:30}} >
                <Card.Content style={{flexDirection:'row'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18,flex:1,flexBasis:270}}>Tổng đơn hàng: 300.000 đồng/4h</Text>
                  <MaterialCommunityIcons style={{flex:1, flexBasis:10}} name="arrow-right" color='white' size={26} />
                </Card.Content>
              </Card>
            </View>
        </View>
      <Modal
        visible={isModalVisible}
        onRequestClose={()=>setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        >
          <View style={{flex:1,backgroundColor:'white',padding:"5%",justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Công việc mà nhân viên Egiver sẽ thực hiện trong gói dịch vụ này</Text>
            <Text style={{fontSize:16}}>&#x25CF; Lên thực đơn và nấu ăn theo chế dịnh dưỡng cá nhân hoá như yêu cầu, sở thích và tình trạng sức khỏe của khách hàng.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Hỗ trợ đưa đón, di chuyển người già đến các cơ sở y tế và theo dõi tình trạng bệnh lý. </Text>
            <Text style={{fontSize:16}}>&#x25CF; Ghi chép kết quả khám bệnh và hướng dẫn, nhắc nhở sử dụng thuốc cho người già.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Tìm kiếm, hỗ trợ khách hàng tham gia các câu lạc bộ phù hợp.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Trông nom, chăm sóc người già theo yêu cầu</Text>
            <Text style={{fontSize:16}}>&#x25CF; Hỗ trợ người già tắm rửa, vệ sinh cá nhân.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Giữ cho không gian sống và sinh hoạt của khách hàng luôn sạch sẽ, gọn gàng.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Giúp người già sử dụng các dụng cụ hỗ trợ di chuyển phù hợp với tình trạng (xe lăn, nạng,...)</Text>
            <Text style={{fontSize:16}}>&#x25CF; Theo dõi chỉ số cơ thể & ghi chép kết quả, báo cáo cho người thân hoặc cơ sở y tế khi cần thiết.</Text>
            <Card onPress={()=>{setIsModalVisible(false);HomeHandler();setVisible(true)}}style={{backgroundColor:'#00205d',borderRadius:30}} >
                <Card.Content style={{flexDirection:'row',marginLeft:'25%'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:22,flex:1}}>Xác nhận thuê</Text>
                </Card.Content>
              </Card>
          </View>
      </Modal>
      </SafeAreaView>
  );
}
function Daily() {
  const [value, setValue] = React.useState([]);
  const [valuehpd, setValuehpd] = React.useState('');
  
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [value2, setValue2] = React.useState(null);
  const [backgroundColor, setBackgroundColor] = React.useState('#fff'); // Initial white background
  const [backgroundColor2, setBackgroundColor2] = React.useState('#fff'); // Initial white background

  // const [date, setDate] = React.useState(new Date()); // Initial white background
  const [mode, setMode] = React.useState('date'); // Initial white background
  const [show, setShow] = React.useState(false); // Initial white background
  const [text, setText] = React.useState('  01  |  05  |  2024  '); // Initial white background
  const [time, setTime] = React.useState('  08  |  00'); // Initial white background

  const [isModalVisible,setIsModalVisible] = React.useState(false)

  // const onChange=(event,selectedDate)=>{
  //   const currentDate =selectedDate || date;
  //   setShow(Platform.OS==='ios');
  //   setDate(currentDate)

  //   let tempDate=new Date(currentDate);
  //   let fDate =tempDate.getDate()+'/'+ (tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
  //   let fTime = tempDate.getHours()+' giờ '+tempDate.getMinutes()+' phút ';
  //   setText('\t'+fDate)
  //   setTime('\t'+fTime)
  //   console.log(fDate+' ('+fTime+')')
  // }
  const showMode=(currentMode)=>{
    setShow(true)
    setMode(currentMode)
  }
  const handleCardPress = () => {
    setBackgroundColor(backgroundColor === '#fff' ? 'lightgreen' : '#fff'); // Toggle color
  };
  const handleCardPress2 = () => {
    setBackgroundColor2(backgroundColor2 === '#fff' ? 'lightgreen' : '#fff'); // Toggle color
  };
  const navigation = useNavigation();
  
  const HomeHandler = () => {
    navigation.navigate('Home');
  };
  const ConfirmHandler = () => {
    navigation.navigate('Home');
  };
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [date, setDate] = React.useState(new Date())
  const [date2, setDate2] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)



  return (
      <SafeAreaView style={styles.container}>
        

            <TouchableRipple
      style={[styles.mainContent, styles.paymentCell1]}
      onPress={() => {console.log('Pressed');HomeHandler();}}
      rippleColor="rgba(0, 0, 0, .32)"
    >
        <View style={[styles.paymentCell1]}>
            <MaterialCommunityIcons name="arrow-left" color='black' size={32} />
            <Text style={{fontWeight: 'bold',fontSize:16}}>Hỗ trợ hoạt động sinh hoạt hằng ngày cho người cao tuổi</Text>
        </View>
    </TouchableRipple>

        <View style={[styles.locationHead, styles.paymentCell1]}>
          <MaterialCommunityIcons name="map-marker-radius" color='red' size={40} />
          <View>
            <Text style={{fontWeight:'bold'}}>Đại học Kinh tế TP.HCM (UEH N)</Text>
            <Text style={{fontSize:12}}>Khu Chức Năng Số 15, Đô Thị Mới Nam Thành Phố...</Text>
          </View>
          <MaterialCommunityIcons name="arrow-right" color='black' size={32} />
        </View>
        
        <View style={[styles.mainContent, styles.paymentCell2]}>
          <View style={{flex:1,flexDirection:'row',width:'90%',flexBasis:30}}>
          <Text style={{fontWeight:'bold', marginTop:'2%', color:'#00205D',fontSize:18}}>
          TÙY CHỌN DỊCH VỤ
          </Text>
          </View>
          
          <View style={{flex:1,flexDirection:'row',marginLeft:'10%',marginRight:'10%',flexBasis:50}}>
          <View style={{flex:1}}>
          <Card style={{backgroundColor:'#00205D',flex:1,borderRadius:30,flexDirection:'row',justifyContent:'center',marginBottom:'3%'}}>
            <Card.Content style={{flex:1,width:300}}>
            <Dropdown
              style={{height:'90%'}}
              selectedTextStyle={{color:'white',fontWeight:'bold'}}
              placeholderStyle={{color:'white',fontWeight:'bold'}}
              iconStyle={styles.iconStyle}
              data={optionDateMonth}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="      Chọn theo ngày hoặc tháng"
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
            </Card.Content>
          </Card>

          </View>

          </View>

          <View style={{flex:1,flexDirection:'row',width:'80%',flexBasis:50, marginTop:'2%'}}>
          <SegmentedButtons
              value={valuehpd}
              style={styles.group}
              onValueChange={setValuehpd}
              buttons={[
                {
                  style: styles.button,
                  value: '1',
                  label: '4 giờ/ngày',
                },
                {
                  style: styles.button,
                  value: '2',
                  label: '8 giờ/ngày',
                }
              ]}
              />
          </View>

          <View style={{flex:1,flexDirection:'row',flexBasis:80, marginBottom:'2%'}}>

          <Card style={{flex:1,flexBasis:10, backgroundColor:'#A62A2A',borderRadius:30,marginLeft:'10%', marginRight:'5%',justifyContent:'center'}}>
            <Card.Content style={{marginLeft:'-7%'}}>
              <Text style={{fontSize:14.5, fontWeight:'bold', color:'white'}}>Tiện ích khác</Text>
            </Card.Content>
          </Card>

          <View style={{flex:1,flexBasis:100,marginRight:'5%'}}>
          <Card onPress={handleCardPress} style={{flex:1, borderRadius:30,marginBottom:'3%', backgroundColor:backgroundColor}}>
            <Card.Content style={{marginTop:'-6%', marginLeft:'10%',marginRight:'10%'}}>
              <Text style={{fontSize:16}}>Quét dọn nhà cửa</Text>
            </Card.Content>
          </Card>

          <Card onPress={handleCardPress2} style={{flex:1,borderRadius:30,backgroundColor:backgroundColor2}}>
          <Card.Content style={{marginTop:'-6%', marginLeft:'10%',marginRight:'10%'}}>
              <Text style={{fontSize:16}}>Giặt phơi quần áo</Text>
            </Card.Content>
          </Card>
          </View>
          
          </View>
        </View>
      
        <View style={[styles.mainContent, styles.paymentCell3]}>
          <View style={{flex:1, width:'100%',paddingLeft:'5%',marginTop:'2%',flexBasis:10}}>
          <Text style={{fontWeight:'bold', fontSize:18, color:'#00205D'}}>THỜI GIAN LÀM VIỆC</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',flexBasis:110}}>
            <View style={{flex:1,marginBottom:'4%', marginTop:'4%', justifyContent:'center', flexDirection:'row'}}>
            <ImageBackground source={require('./assets/calendar.png')} resizeMode='contain' style={{ flex:1,paddingLeft:'20%',paddingRight:'18%'}}>
            </ImageBackground>            
            </View>

            <View style={{flex:1,flexBasis:50}}>
           
              <View style={{flex:1, alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:19,fontWeight:'bold', flex:1}}>
                  Ngày
                </Text>
                  <Card onPress={()=>setOpen(true)} style={{borderRadius:30,marginBottom:'3%',marginRight:'-10%', backgroundColor:'#dee6e6'}}>
                    <Card.Content style={{marginTop:'-8%',marginBottom:'-8%', marginLeft:'0%',marginRight:'0%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold'}}>{text}</Text>
                    </Card.Content>
                  </Card>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  locale='vi'
                  mode='date'
                  confirmText='Nhập'
                  cancelText='Hủy'
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)

                    newDay={date}.date.getDate().toString()
                    if (newDay.length==1){
                      newDay='0'+newDay
                    }

                    newMonth=({date}.date.getMonth()+1).toString()
                    if (newMonth.length==1){
                      newMonth='0'+newMonth
                    }
                    newYear={date}.date.getFullYear().toString()

                    console.log('  '+newDay+'  |  '+newMonth+'  |  '+{date}.date.getFullYear().toString()+'  ')
                    setText('  '+newDay+'  |  '+newMonth+'  |  '+newYear+'  ')
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />

              </View>

              <View style={{flex:1,alignItems:'flex-start',flexDirection:'row'}}>
                <Text style={{fontSize:19,fontWeight:'bold',marginTop:'-1%',marginLeft:'3%',flex:1}}>
                    Giờ
                </Text>
                <Card onPress={()=>setOpen2(true)} style={{borderRadius:30,marginBottom:'3%',marginRight:'7%',marginTop:'-3%', backgroundColor:'#dee6e6'}}>
                  <Card.Content style={{marginTop:'-12%',marginBottom:'-12%', marginLeft:'0%',marginRight:'0%'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{time}</Text>
                  </Card.Content>
                </Card>
                <DatePicker
                  modal
                  open={open2}
                  date={date2}
                  locale='vi'
                  is24hourSource="locale"
                  confirmText='Nhập'
                  cancelText='Hủy'
                  title={null}
                  mode='time'
                  onConfirm={(date2) => {
                    setOpen2(false)
                    setDate2(date2)

                    newHour={date2}.date2.getHours().toString()
                    if (newHour.length==1){
                      newHour='0'+newHour
                    }

                    newMinute={date2}.date2.getMinutes().toString()
                    if (newMinute.length==1){
                      newMinute='0'+newMinute
                    }
                    console.log('  '+newHour+'  |  '+newMinute+'  ')
                    setTime('  '+newHour+'  |  '+newMinute+'  ')
                  }}
                  onCancel={() => {
                    setOpen2(false)
                  }}
                />
              </View>

            </View>

            <View style={{flex:1,flexBasis:0, marginRight:'-30%'}}>
              </View>

          </View>
        </View>
        
        <View style={[styles.mainContent, styles.paymentCell4]}>
        <View style={{flex:1, flexDirection:'row', width:'100%'}}>
            <View style={{flex:1, paddingLeft:'5%'}}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'#00205D'}}>LẶP LẠI HẰNG TUẦN</Text>
                <Text style={{fontWeight:'bold',fontSize:10}}>Tháng 4/2024</Text>
            </View>
              <View style={{flex:1, alignItems:'flex-end', paddingRight:'5%'}}>  
                <Switch  value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
          </View>
        <ScrollView horizontal={true} style={{flex:1}}>
              
             <SegmentedButtons
              multiSelect
              value={value}
              style={styles.group}
              onValueChange={setValue}
              buttons={[
                {
                  style: styles.button,
                  value: 't2',
                  label: 'Thứ 2',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't3',
                  label: 'Thứ 3',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't4',
                  label: 'Thứ 4',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't5',
                  label: 'Thứ 5',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't6',
                  label: 'Thứ 6',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't7',
                  label: 'Thứ 7',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 'cn',
                  label: 'Chủ nhật',
                  showSelectedCheck: true,
                },
              ]}
              />
          </ScrollView>
        </View>
        
        <View style={[styles.payButton, styles.paymentCell1]}>
          <View style={{flex:1}}>
              <Card onPress={()=>setIsModalVisible(true)} style={{backgroundColor:'#00205D',borderRadius:30}} >
                <Card.Content style={{flexDirection:'row'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18,flex:1,flexBasis:270}}>Tổng đơn hàng: 300.000 đồng/4h</Text>
                  <MaterialCommunityIcons style={{flex:1, flexBasis:10}} name="arrow-right" color='white' size={26} />
                </Card.Content>
              </Card>
            </View>
        </View>
      <Modal
        visible={isModalVisible}
        onRequestClose={()=>setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        >
          <View style={{flex:1,backgroundColor:'white',padding:"5%",justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Công việc mà nhân viên Egiver sẽ thực hiện trong gói dịch vụ này</Text>
            <Text style={{fontSize:16}}>&#x25CF; Lên thực đơn và nấu ăn theo chế dịnh dưỡng cá nhân hoá như yêu cầu, sở thích và tình trạng sức khỏe của khách hàng.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Hỗ trợ đưa đón, di chuyển người già đến các cơ sở y tế và theo dõi tình trạng bệnh lý. </Text>
            <Text style={{fontSize:16}}>&#x25CF; Ghi chép kết quả khám bệnh và hướng dẫn, nhắc nhở sử dụng thuốc cho người già.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Tìm kiếm, hỗ trợ khách hàng tham gia các câu lạc bộ phù hợp.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Trông nom, chăm sóc người già theo yêu cầu</Text>
            <Text style={{fontSize:16}}>&#x25CF; Hỗ trợ người già tắm rửa, vệ sinh cá nhân.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Giữ cho không gian sống và sinh hoạt của khách hàng luôn sạch sẽ, gọn gàng.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Giúp người già sử dụng các dụng cụ hỗ trợ di chuyển phù hợp với tình trạng (xe lăn, nạng,...)</Text>
            <Text style={{fontSize:16}}>&#x25CF; Theo dõi chỉ số cơ thể & ghi chép kết quả, báo cáo cho người thân hoặc cơ sở y tế khi cần thiết.</Text>
            <Card onPress={()=>{setIsModalVisible(false);HomeHandler();setVisible(true)}}style={{backgroundColor:'#00205d',borderRadius:30}} >
                <Card.Content style={{flexDirection:'row',marginLeft:'25%'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:22,flex:1}}>Xác nhận thuê</Text>
                </Card.Content>
              </Card>
          </View>
      </Modal>
      </SafeAreaView>
  );
}

function Social() {
  const [value, setValue] = React.useState([]);
  const [valuehpd, setValuehpd] = React.useState('');
  
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);
  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  const [value2, setValue2] = React.useState(null);
  const [backgroundColor, setBackgroundColor] = React.useState('#fff'); // Initial white background
  const [backgroundColor2, setBackgroundColor2] = React.useState('#fff'); // Initial white background

  // const [date, setDate] = React.useState(new Date()); // Initial white background
  const [mode, setMode] = React.useState('date'); // Initial white background
  const [show, setShow] = React.useState(false); // Initial white background
  const [text, setText] = React.useState('  01  |  05  |  2024  '); // Initial white background
  const [time, setTime] = React.useState('  08  |  00'); // Initial white background

  const [isModalVisible,setIsModalVisible] = React.useState(false)

  // const onChange=(event,selectedDate)=>{
  //   const currentDate =selectedDate || date;
  //   setShow(Platform.OS==='ios');
  //   setDate(currentDate)

  //   let tempDate=new Date(currentDate);
  //   let fDate =tempDate.getDate()+'/'+ (tempDate.getMonth()+1)+'/'+tempDate.getFullYear();
  //   let fTime = tempDate.getHours()+' giờ '+tempDate.getMinutes()+' phút ';
  //   setText('\t'+fDate)
  //   setTime('\t'+fTime)
  //   console.log(fDate+' ('+fTime+')')
  // }
  const showMode=(currentMode)=>{
    setShow(true)
    setMode(currentMode)
  }
  const handleCardPress = () => {
    setBackgroundColor(backgroundColor === '#fff' ? 'lightgreen' : '#fff'); // Toggle color
  };
  const handleCardPress2 = () => {
    setBackgroundColor2(backgroundColor2 === '#fff' ? 'lightgreen' : '#fff'); // Toggle color
  };
  const navigation = useNavigation();
  
  const HomeHandler = () => {
    navigation.navigate('Home');
  };
  const ConfirmHandler = () => {
    navigation.navigate('Home');
  };
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const [date, setDate] = React.useState(new Date())
  const [date2, setDate2] = React.useState(new Date())
  const [open, setOpen] = React.useState(false)
  const [open2, setOpen2] = React.useState(false)



  return (
      <SafeAreaView style={styles.container}>
        

            <TouchableRipple
      style={[styles.mainContent, styles.paymentCell1]}
      onPress={() => {console.log('Pressed');HomeHandler();}}
      rippleColor="rgba(0, 0, 0, .32)"
    >
        <View style={[styles.paymentCell1]}>
            <MaterialCommunityIcons name="arrow-left" color='black' size={32} />
            <Text style={{fontWeight: 'bold',fontSize:16}}>Hỗ trợ hoạt động xã hội tại nhà cho người cao tuổi</Text>
        </View>
    </TouchableRipple>

        <View style={[styles.locationHead, styles.paymentCell1]}>
          <MaterialCommunityIcons name="map-marker-radius" color='red' size={40} />
          <View>
            <Text style={{fontWeight:'bold'}}>Đại học Kinh tế TP.HCM (UEH N)</Text>
            <Text style={{fontSize:12}}>Khu Chức Năng Số 15, Đô Thị Mới Nam Thành Phố...</Text>
          </View>
          <MaterialCommunityIcons name="arrow-right" color='black' size={32} />
        </View>
        
        <View style={[styles.mainContent, styles.paymentCell2]}>
          <View style={{flex:1,flexDirection:'row',width:'90%',flexBasis:30}}>
          <Text style={{fontWeight:'bold', marginTop:'2%', color:'#00205D',fontSize:18}}>
          TÙY CHỌN DỊCH VỤ
          </Text>
          </View>
          
          <View style={{flex:1,flexDirection:'row',marginLeft:'10%',marginRight:'10%',flexBasis:50}}>
          <View style={{flex:1}}>
          <Card style={{backgroundColor:'#00205D',flex:1,borderRadius:30,flexDirection:'row',justifyContent:'center',marginBottom:'3%'}}>
            <Card.Content style={{flex:1,width:300}}>
            <Dropdown
              style={{height:'90%'}}
              selectedTextStyle={{color:'white',fontWeight:'bold'}}
              placeholderStyle={{color:'white',fontWeight:'bold'}}
              iconStyle={styles.iconStyle}
              data={optionDateMonth}
              maxHeight={300}
              labelField="label"
              valueField="value"
              placeholder="      Chọn theo ngày hoặc tháng"
              value={value2}
              onChange={item => {
                setValue2(item.value);
              }}
            />
            </Card.Content>
          </Card>

          </View>

          </View>

          <View style={{flex:1,flexDirection:'row',width:'80%',flexBasis:50, marginTop:'2%'}}>
          <SegmentedButtons
              value={valuehpd}
              style={styles.group}
              onValueChange={setValuehpd}
              buttons={[
                {
                  style: styles.button,
                  value: '1',
                  label: '1 giờ/ngày',
                },
                {
                  style: styles.button,
                  value: '2',
                  label: '2 giờ/ngày',
                }
              ]}
              />
          </View>

          <View style={{flex:1,flexDirection:'row',flexBasis:80, marginBottom:'2%'}}>

          <Card style={{flex:1,flexBasis:10, backgroundColor:'#A62A2A',borderRadius:30,marginLeft:'10%', marginRight:'5%',justifyContent:'center'}}>
            <Card.Content style={{marginLeft:'-7%'}}>
              <Text style={{fontSize:14.5, fontWeight:'bold', color:'white'}}>Tiện ích khác</Text>
            </Card.Content>
          </Card>

          <View style={{flex:1,flexBasis:100,marginRight:'5%'}}>
          <Card onPress={handleCardPress} style={{flex:1, borderRadius:30,marginBottom:'3%', backgroundColor:backgroundColor}}>
            <Card.Content style={{marginTop:'-6%', marginLeft:'10%',marginRight:'5%'}}>
              <Text style={{fontSize:16}}>Dạy dưỡng sinh 1:1</Text>
            </Card.Content>
          </Card>

          <Card onPress={handleCardPress2} style={{flex:1,borderRadius:30,backgroundColor:backgroundColor2}}>
          <Card.Content style={{marginTop:'-6%', marginLeft:'10%',marginRight:'5%'}}>
              <Text style={{fontSize:16}}>Dạy y học cổ truyền</Text>
            </Card.Content>
          </Card>
          </View>
          
          </View>
        </View>
      
        <View style={[styles.mainContent, styles.paymentCell3]}>
          <View style={{flex:1, width:'100%',paddingLeft:'5%',marginTop:'2%',flexBasis:10}}>
          <Text style={{fontWeight:'bold', fontSize:18, color:'#00205D'}}>THỜI GIAN LÀM VIỆC</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',flexBasis:110}}>
            <View style={{flex:1,marginBottom:'4%', marginTop:'4%', justifyContent:'center', flexDirection:'row'}}>
            <ImageBackground source={require('./assets/calendar.png')} resizeMode='contain' style={{ flex:1,paddingLeft:'20%',paddingRight:'18%'}}>
            </ImageBackground>            
            </View>

            <View style={{flex:1,flexBasis:50}}>
           
              <View style={{flex:1, alignItems:'center',flexDirection:'row'}}>
                <Text style={{fontSize:19,fontWeight:'bold', flex:1}}>
                  Ngày
                </Text>
                  <Card onPress={()=>setOpen(true)} style={{borderRadius:30,marginBottom:'3%',marginRight:'-10%', backgroundColor:'#dee6e6'}}>
                    <Card.Content style={{marginTop:'-8%',marginBottom:'-8%', marginLeft:'0%',marginRight:'0%'}}>
                      <Text style={{fontSize:16, fontWeight:'bold'}}>{text}</Text>
                    </Card.Content>
                  </Card>
                <DatePicker
                  modal
                  open={open}
                  date={date}
                  locale='vi'
                  mode='date'
                  confirmText='Nhập'
                  cancelText='Hủy'
                  onConfirm={(date) => {
                    setOpen(false)
                    setDate(date)

                    newDay={date}.date.getDate().toString()
                    if (newDay.length==1){
                      newDay='0'+newDay
                    }

                    newMonth=({date}.date.getMonth()+1).toString()
                    if (newMonth.length==1){
                      newMonth='0'+newMonth
                    }
                    newYear={date}.date.getFullYear().toString()

                    console.log('  '+newDay+'  |  '+newMonth+'  |  '+{date}.date.getFullYear().toString()+'  ')
                    setText('  '+newDay+'  |  '+newMonth+'  |  '+newYear+'  ')
                  }}
                  onCancel={() => {
                    setOpen(false)
                  }}
                />

              </View>

              <View style={{flex:1,alignItems:'flex-start',flexDirection:'row'}}>
                <Text style={{fontSize:19,fontWeight:'bold',marginTop:'-1%',marginLeft:'3%',flex:1}}>
                    Giờ
                </Text>
                <Card onPress={()=>setOpen2(true)} style={{borderRadius:30,marginBottom:'3%',marginRight:'7%',marginTop:'-3%', backgroundColor:'#dee6e6'}}>
                  <Card.Content style={{marginTop:'-12%',marginBottom:'-12%', marginLeft:'0%',marginRight:'0%'}}>
                    <Text style={{fontSize:16, fontWeight:'bold'}}>{time}</Text>
                  </Card.Content>
                </Card>
                <DatePicker
                  modal
                  open={open2}
                  date={date2}
                  locale='vi'
                  is24hourSource="locale"
                  confirmText='Nhập'
                  cancelText='Hủy'
                  title={null}
                  mode='time'
                  onConfirm={(date2) => {
                    setOpen2(false)
                    setDate2(date2)

                    newHour={date2}.date2.getHours().toString()
                    if (newHour.length==1){
                      newHour='0'+newHour
                    }

                    newMinute={date2}.date2.getMinutes().toString()
                    if (newMinute.length==1){
                      newMinute='0'+newMinute
                    }
                    console.log('  '+newHour+'  |  '+newMinute+'  ')
                    setTime('  '+newHour+'  |  '+newMinute+'  ')
                  }}
                  onCancel={() => {
                    setOpen2(false)
                  }}
                />
              </View>

            </View>

            <View style={{flex:1,flexBasis:0, marginRight:'-30%'}}>
              </View>

          </View>
        </View>
        
        <View style={[styles.mainContent, styles.paymentCell4]}>
        <View style={{flex:1, flexDirection:'row', width:'100%'}}>
            <View style={{flex:1, paddingLeft:'5%'}}>
                <Text style={{fontWeight:'bold', fontSize:18, color:'#00205D'}}>LẶP LẠI HẰNG TUẦN</Text>
                <Text style={{fontWeight:'bold',fontSize:10}}>Tháng 4/2024</Text>
            </View>
              <View style={{flex:1, alignItems:'flex-end', paddingRight:'5%'}}>  
                <Switch  value={isSwitchOn} onValueChange={onToggleSwitch} />
              </View>
          </View>
        <ScrollView horizontal={true} style={{flex:1}}>
              
             <SegmentedButtons
              multiSelect
              value={value}
              style={styles.group}
              onValueChange={setValue}
              buttons={[
                {
                  style: styles.button,
                  value: 't2',
                  label: 'Thứ 2',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't3',
                  label: 'Thứ 3',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't4',
                  label: 'Thứ 4',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't5',
                  label: 'Thứ 5',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't6',
                  label: 'Thứ 6',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 't7',
                  label: 'Thứ 7',
                  showSelectedCheck: true,
                },
                {
                  style: styles.button,
                  value: 'cn',
                  label: 'Chủ nhật',
                  showSelectedCheck: true,
                },
              ]}
              />
          </ScrollView>
        </View>
        
        <View style={[styles.payButton, styles.paymentCell1]}>
          <View style={{flex:1}}>
              <Card onPress={()=>setIsModalVisible(true)} style={{backgroundColor:'#00205D',borderRadius:30}} >
                <Card.Content style={{flexDirection:'row'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:18,flex:1,flexBasis:270}}>Tổng đơn hàng: 200.000 đồng/2h</Text>
                  <MaterialCommunityIcons style={{flex:1, flexBasis:10}} name="arrow-right" color='white' size={26} />
                </Card.Content>
              </Card>
            </View>
        </View>
      <Modal
        visible={isModalVisible}
        onRequestClose={()=>setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet"
        >
          <View style={{flex:1,backgroundColor:'white',padding:"5%",justifyContent:'space-between'}}>
            <Text style={{fontWeight:'bold',fontSize:16}}>Công việc mà nhân viên Egiver sẽ thực hiện trong gói dịch vụ này</Text>
            <Text style={{fontSize:16}}>&#x25CF; Lên thực đơn và nấu ăn theo chế dịnh dưỡng cá nhân hoá như yêu cầu, sở thích và tình trạng sức khỏe của khách hàng.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Hỗ trợ đưa đón, di chuyển người già đến các cơ sở y tế và theo dõi tình trạng bệnh lý. </Text>
            <Text style={{fontSize:16}}>&#x25CF; Ghi chép kết quả khám bệnh và hướng dẫn, nhắc nhở sử dụng thuốc cho người già.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Tìm kiếm, hỗ trợ khách hàng tham gia các câu lạc bộ phù hợp.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Trông nom, chăm sóc người già theo yêu cầu</Text>
            <Text style={{fontSize:16}}>&#x25CF; Hỗ trợ người già tắm rửa, vệ sinh cá nhân.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Giữ cho không gian sống và sinh hoạt của khách hàng luôn sạch sẽ, gọn gàng.</Text>
            <Text style={{fontSize:16}}>&#x25CF; Giúp người già sử dụng các dụng cụ hỗ trợ di chuyển phù hợp với tình trạng (xe lăn, nạng,...)</Text>
            <Text style={{fontSize:16}}>&#x25CF; Theo dõi chỉ số cơ thể & ghi chép kết quả, báo cáo cho người thân hoặc cơ sở y tế khi cần thiết.</Text>
            <Card onPress={()=>{setIsModalVisible(false);HomeHandler();setVisible(true)}}style={{backgroundColor:'#00205d',borderRadius:30}} >
                <Card.Content style={{flexDirection:'row',marginLeft:'25%'}}>
                  <Text style={{color:'white',fontWeight:'bold',fontSize:22,flex:1}}>Xác nhận thuê</Text>
                </Card.Content>
              </Card>
          </View>
      </Modal>
      </SafeAreaView>
  );
}



function HomeScreen() {
  
  const [searchQuery, setSearchQuery] = React.useState('');
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  const HomeHandler = () => {
    navigation.navigate('HomePage');
  };

  const BasicsHandler = () => {
    navigation.navigate('BasicPage');
  };

  const DailyHandler = () => {
    navigation.navigate('DailyPage');
  };

  const SocialHandler = () => {
    navigation.navigate('SocialPage');
  };


  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContent}>
        
        <Image source={require('./assets/header.png')} style={{ flex:1,aspectRatio: 8,resizeMode:'cover'}} />
        <View style={styles.searchB}>
          <Searchbar
              style={{backgroundColor:'white', borderWidth:2, borderColor:'gray', marginBottom:2}}
              placeholder="Tìm kiếm dịch vụ hỗ trợ..."
              onChangeText={setSearchQuery}
              value={searchQuery}
              inputStyle={{height:30}}
              // inputCon
            />
        </View>
        <Image source={require('./assets/advertising.png')} style={{ flex:1,resizeMode:'contain', backgroundColor:'#ffffff',flexBasis:130}} />
        <View style={{flex:1}}></View>

      </View>
      
      <View style={styles.mainContent}>
        <View style={{flex:1, flexDirection:'row',justifyContent:'flex-start',width:'100%', marginLeft:'10%',marginTop:'3%', flexBasis:20}}>
          <Text style={{color:"#00205D",fontWeight: 'bold', fontSize: 20}}>Dịch vụ của Egiver!</Text>
        </View>

    <TouchableRipple
      style={{flex:1, flexDirection:'row',flexBasis:70, paddingRight:'1.5%'}}
      onPress={() => {console.log('Pressed');BasicsHandler()}}
      rippleColor="rgba(0, 0, 0, .32)"
    >
        <View style={{flex:1, flexDirection:'row',flexBasis:70, paddingRight:'1.5%'}}>
          <View style={{ flex:1,flexDirection:'row',flexBasis:1,justifyContent:'flex-start',paddingTop:'1%'}} >
            <Image source={require('./assets/bullet1.png')} style={{ flex:1,resizeMode:'contain', aspectRatio: 1.6}} />
          </View>
          <View style={{ flex:1,flexDirection:'column',flexBasis:130,justifyContent:'flex-start',paddingTop:'2.5%'}} >
            <Text style={{flex:1,flexBasis:40,color:"black",fontWeight: 'bold', fontSize: 15}}>Hỗ trợ hoạt động sinh sống cơ bản hằng ngày cho người cao tuổi</Text>
            <Text style={{flex:1,flexBasis:120,color:"black",fontStyle: 'italic', fontSize: 10}}>Bao gồm: hỗ trợ ăn uống, vệ sinh cá nhân, di chuyển, đo các chỉ số cơ thể, nhắc nhở uống thuốc...</Text>
          </View>
        </View>
    </TouchableRipple>

    <TouchableRipple
      style={{flex:1, flexDirection:'row',flexBasis:70, paddingRight:'1.5%'}}
      onPress={() => {console.log('Pressed');DailyHandler()}}
      rippleColor="rgba(0, 0, 0, .32)"
    >
        <View style={{flex:1, flexDirection:'row',flexBasis:70,paddingRight:'1.5%'}}>
          <View style={{ flex:1,flexDirection:'row',flexBasis:1,justifyContent:'flex-start', paddingTop:'1%'}} >
            <Image source={require('./assets/bullet2.png')} style={{ flex:1,resizeMode:'contain', aspectRatio: 1.6}} />
          </View>
          <View style={{ flex:1,flexDirection:'column',flexBasis:130,justifyContent:'flex-start', paddingTop:'2.5%'}} >
            <Text style={{flex:1,flexBasis:40,color:"black",fontWeight: 'bold', fontSize: 15}}>Hỗ trợ hoạt động sinh hoạt hằng ngày cho người cao tuổi</Text>
            <Text style={{flex:1,flexBasis:120,color:"black",fontStyle: 'italic', fontSize: 10}}>Bao gồm: nấu ăn theo chế độ dinh dưỡng, hỗ trợ đi khám bệnh, hỗ trợ tham gia các CLB người cao tuổi...</Text>
          </View>
        </View>
    </TouchableRipple>


    <TouchableRipple
      style={{flex:1, flexDirection:'row',flexBasis:70, paddingRight:'1.5%'}}
      onPress={() => {console.log('Pressed');SocialHandler()}}
      rippleColor="rgba(0, 0, 0, .32)"
    >
        <View style={{flex:1, flexDirection:'row',flexBasis:70,paddingRight:'1.5%'}}>
          <View style={{ flex:1,flexDirection:'row',flexBasis:1,justifyContent:'flex-start',paddingTop:'1%'}} >
            <Image source={require('./assets/bullet3.png')} style={{ flex:1,resizeMode:'contain', aspectRatio: 1.6}} />
          </View>
          <View style={{ flex:1,flexDirection:'column',flexBasis:130,justifyContent:'flex-start',paddingTop:'2.5%'}} >
            <Text style={{flex:1,flexBasis:40,color:"black",fontWeight: 'bold', fontSize: 15}}>Hỗ trợ các hoạt động xã hội cho người cao tuổi</Text>
            <Text style={{flex:1,flexBasis:120,color:"black",fontStyle: 'italic', fontSize: 10}}>Bao gồm: dạy dưỡng sinh, y học cổ truyền…...</Text>
          </View>
        </View>
    </TouchableRipple>



        
      </View>
    </SafeAreaView>
    
  );
}

function FirstHome() {
  return (
      <Tab.Navigator barStyle={{ backgroundColor: '#ffffff' }}>
      <Tab.Screen
        name="Trang chủ"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Thông báo"
        component={Notification}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell-ring-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Đơn hàng"
        component={Bill}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cart-outline" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Hồ sơ"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account-outline" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function Notification() {
  return (
    
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('./assets/finding.png')} resizeMode='contain' style={{flex:1}} imageStyle={{opacity:0.6}}>
          <Text style={{fontSize:22,flex:1,opacity:0.5, alignSelf:'center', marginTop:'10%'}}>
          Chưa có thông báo mới nào
          </Text>
        </ImageBackground>
      </SafeAreaView>
  );
}

function Bill() {
  return (
    
    <SafeAreaView style={{flex:1}}>
        <ImageBackground source={require('./assets/finding.png')} resizeMode='contain' style={{flex:1}} imageStyle={{opacity:0.6}}>
          <Text style={{fontSize:22,flex:1,opacity:0.5, alignSelf:'center', marginTop:'10%'}}>
          Chưa có đơn hàng mới nào
          </Text>
        </ImageBackground>
      </SafeAreaView>
  );
}

function Profile() {
  const [date, setDate] = React.useState(new Date())
  return (
    <SafeAreaView style={styles.container}>
      </SafeAreaView>
  );
}

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer >
        <Stack.Navigator>
          <Stack.Screen name="Home" component={FirstHome}
          options={{ headerShown: false }}
          />

          <Stack.Screen name="BasicPage" component={Basic}
          options={{ headerShown: false }}
          />

          <Stack.Screen name="DailyPage" component={Daily}
          options={{ headerShown: false }}
          />
          
          <Stack.Screen name="SocialPage" component={Social}
          options={{ headerShown: false }}
          />        
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#dee6e6',
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    // rowGap:7
  },
  mainContent: {
    backgroundColor: '#ffffff',
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    width:'100%',
    marginBottom:'1.5%'
  },

  payButton: {
    backgroundColor: '#dee6e6',
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    width:'100%',
    marginBottom:'1.5%'
  },

  locationHead: {
    backgroundColor: '#ffffff',
    flex: 1, 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    width:'100%',
    marginBottom:'1.5%'
  },
  searchB: {
    backgroundColor: '#ffffff',
    flex: 1, 
    flexDirection:'row',
    justifyContent: 'center', 
    alignItems:'center', 
    width:'90%',
    padding:20,
    height:'80%',
  },
  paymentCell1:{
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    flexDirection:'row',
    flexBasis:0, 
    paddingRight:"6%",
    paddingLeft:"3%",
  },
  paymentCell2:{
    flexBasis:190, 
  },
  paymentCell3:{
    flexBasis:100, 
  },
  paymentCell4:{
    flexBasis:60, 
    justifyContent:'flex-start',
    alignContent:'flex-start',
    paddingBottom:'1%',
    paddingTop:'1%'
  },
  finalTxt: { fontSize:12 },
  group: { flex:1,height:"80%",justifyContent: 'flex-end' },
  button: {
    // backgroundColor:'black',
    flex: 1,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
});