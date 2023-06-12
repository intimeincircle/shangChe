import * as React from 'react';
import {
    Form,
    Cell,
    Button,
    Card,
} from 'react-vant/2x';
import { View } from '@fower/remax';
import {useMutation} from "react-query";
import {login} from "@/apis";
import {navigate, setStorageSync} from "@/platform";
import {CurrentPage} from "@/app.config";
import {useCallback, useRef} from "react";

const checkIfSuccess= (data: {code?: number}) => (data.code ===2001)

export default () => {

    const loginMuation = useMutation(login)
    const ling = useRef<any>();

    const handleShowWarning = useCallback((error: string) => {
        ling.current.warning(error);
    }, []);

    const handleShowError = useCallback((error: string) => {
        ling.current.error(error);
    }, []);

    const [form] = Form.useForm();
    const handleFinish = useCallback((values: any) => {
        console.log('values', values);
        loginMuation.mutate(values, {
            onSuccess: (e) => {
                if(checkIfSuccess(e)) {
                    setStorageSync('AUTH', e.msg)
                    navigate({
                        url: CurrentPage
                    })
                }
            },
        })
    }, [loginMuation]);

    const handleFinishFailed = useCallback((values: any, errorFields: any) => {
        console.log('errorFields', errorFields);
    }, []);

    const handleSetFieldsValue = useCallback(() => {
        form.setFieldsValue({
            name: 'Anna',
            gender: 1,
            level: [0],
            city: 0,
            photo: ['https://smebimage.fuliaoyi.com/FoMXNlKdZt9UqufDkPony8ztWKsU'],
            anonymous: true,
        });
    }, [form]);

    const handleSubmit = useCallback(() => {
        form.submit();
    },[form]);

    return (
        <View style={{ overflow: 'hidden' }}>
            {/* <Ling ref={ling} /> */}
                {/* <Card contentStyle={{ padding: '20px 0 20px' }}> */}
                {/*    <Form onFinish={handleFinish} onFinishFailed={handleFinishFailed}> */}
                {/*        <Form.Item */}
                {/*            noStyle */}
                {/*            name="user_name" */}
                {/*            rules={[{ pattern: /^[a-zA-Z0-9]{3,}$/, message: 'input' }]} */}
                {/*        > */}
                {/*            <Cell.Input label="Phone" placeholder="Please enter" border={false} /> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item */}
                {/*            noStyle */}
                {/*            name="password" */}
                {/*            rules={[{ validator: (v: string) => v?.length >= 5, message: '密码至少6位' }]} */}
                {/*        > */}
                {/*            <Cell.Input label="Password" placeholder="Please enter" border={false} /> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item noStyle style={{ marginTop: 20, padding: '0 20px' }}> */}
                {/*            <Button type="primary" size="large" shape="square" block nativeType="submit"> */}
                {/*                Login */}
                {/*            </Button> */}
                {/*        </Form.Item> */}
                {/*    </Form> */}
                {/* </Card> */}
                {/* <Card contentStyle={{ padding: '20px 0 20px' }}> */}
                {/*    <Form form={form} onFinish={handleFinish} onFinishFailed={handleFinishFailed}> */}
                {/*        <Form.Item noStyle name="name" rules={[{ required: true }]}> */}
                {/*            <Cell.Input label="Name" placeholder="Please enter your name" border={false} /> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item name="gender" label="Gender" rules={[{ required: true }]}> */}
                {/*            <Radio.Group> */}
                {/*                <Radio value={0}>Male</Radio> */}
                {/*                <Radio value={1}>Female</Radio> */}
                {/*            </Radio.Group> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item name="level" label="Level" rules={[{ required: true }]}> */}
                {/*            <Checkbox.Group> */}
                {/*                <Checkbox value={0}>A</Checkbox> */}
                {/*                <Checkbox value={1}>B</Checkbox> */}
                {/*                <Checkbox value={2}>C</Checkbox> */}
                {/*            </Checkbox.Group> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item noStyle name="city" rules={[{ required: true }]}> */}
                {/*            <Cell.Picker */}
                {/*                label="City" */}
                {/*                placeholder="Please choose your city" */}
                {/*                range={['上海', '北京', '杭州', '深圳']} */}
                {/*                border={false} */}
                {/*            /> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item label="Date" name="date" rules={[{ required: true }]}> */}
                {/*            <DatePicker>{v => v}</DatePicker> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item */}
                {/*            label="Photo" */}
                {/*            name="photo" */}
                {/*            valuePropName="files" */}
                {/*            rules={[{ required: true }]} */}
                {/*        > */}
                {/*            <ImageUpload /> */}
                {/*        </Form.Item> */}
                {/*        <Form.Item */}
                {/*            label="Anonymous" */}
                {/*            name="anonymous" */}
                {/*            valuePropName="checked" */}
                {/*            valueAlign="left" */}
                {/*            rules={[{ required: true }]} */}
                {/*        > */}
                {/*            <Switch small /> */}
                {/*        </Form.Item> */}
                {/*        <Row gutter={8} style={{ padding: '0 20px' }}> */}
                {/*            <Col span={7}> */}
                {/*                <Button */}
                {/*                    size="large" */}
                {/*                    shape="square" */}
                {/*                    plain */}
                {/*                    hairline */}
                {/*                    color="#ff4f00" */}
                {/*                    block */}
                {/*                    onTap={handleReset} */}
                {/*                > */}
                {/*                    Reset */}
                {/*                </Button> */}
                {/*            </Col> */}
                {/*            <Col span={7}> */}
                {/*                <Button */}
                {/*                    size="large" */}
                {/*                    shape="square" */}
                {/*                    plain */}
                {/*                    hairline */}
                {/*                    color="#ff4f00" */}
                {/*                    block */}
                {/*                    onTap={handleSetFieldsValue} */}
                {/*                > */}
                {/*                    Set */}
                {/*                </Button> */}
                {/*            </Col> */}
                {/*            <Col span={10}> */}
                {/*                <Button size="large" shape="square" look="orange" block onTap={handleSubmit}> */}
                {/*                    Submit */}
                {/*                </Button> */}
                {/*            </Col> */}
                {/*        </Row> */}
                {/*    </Form> */}
                {/* </Card> */}
        </View>
    );
};
