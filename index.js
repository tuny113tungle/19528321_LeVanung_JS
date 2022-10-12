/* go rnfe de so nhanh */

import { View, Text, Keyboard , TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import styles from './style'
import Task from '../Task'

function Form(props) {
    const [task, setTask] = useState('')
    const handleAddTask = () => {
        if (task.length === 0) {
            alert("Ban vui long nhap cong viec!")
            return false
        }
        props.onAddTask(task)

        // Luc add thi no xoa chu di
        setTask('')

        // an di cai ban phim khi khong add
        Keyboard.dismiss()

    }

    return (
        <View style={styles.addTask}>
            <TextInput
                // goi lai th task de xoa chu tren ban phim
                value={task}
                /* truyen gia tri cua task vao cho nut + */
                onChangeText={(text) => setTask(text)}
                placeholder='Your Task'
                style={styles.input} />
            <TouchableOpacity
                onPress={handleAddTask}
            >
                <View style={styles.dauCong}>
                    <Text style={styles.dCText}>+</Text>
                </View>

            </TouchableOpacity>

        </View>
    )
}

export default Form;