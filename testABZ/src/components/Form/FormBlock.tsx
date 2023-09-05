import React from "react";
import "./styles.scss"
import {Field, Form, Formik,} from 'formik';
import * as yup from 'yup';
import {IUsers} from "../../store/modules/types";
import axios from "axios";


export const FormBlock: React.FC = () => {
debugger
    const regExpPhone = /^[\+]{0,1}380([0-9]{9})$/
    const regExpEmail = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/


    const validation = yup.object().shape({
        name: yup.string().min(2).max(60).typeError('Only string').required('Required'),
        email: yup.string().matches(regExpEmail, 'Example jhon@example.com').min(2).max(100).email('Write correct email').required('Required'),
        phone: yup.string().matches(regExpPhone, ' Example +380955388485').required('Required'),
        position: yup.string().required('Required'),
        photo: yup.mixed().required('Required')


    })

    const initialValues: IUsers = {
        photo: '',
        name: '',
        email: '',
        phone: '+380',
        position: '',
        id: null,
        positionId: null
    };



    return (
        <div className="form" id="form">

            <div className="form__title">Working with POST request</div>

            <Formik
                initialValues={initialValues}
                validationSchema={validation}
                validateOnBlur
                onSubmit={async (values) => {
                    const formData = {
                        records: [
                            {
                                fields: {
                                    name: values.name,
                                    email: values.email,
                                    phone: values.phone,
                                    position: values.position,
                                    photo: values.photo
                                }
                            }
                        ]
                    }

                    console.log('formData', formData)

                    const axiosConfig = {
                        headers: {
                            'Authorization': 'Bearer ' + 'eyJpdiI6Im9mV1NTMlFZQTlJeWlLQ3liVks1MGc9PSIsInZhbHVlIjoiRTJBbUR4dHp1dWJ3ekQ4bG85WVZya3ZpRGlMQ0g5ZHk4M05UNUY4Rmd3eFM3czc2UDRBR0E4SDR5WXlVTG5DUDdSRTJTMU1KQ2lUQmVZYXZZOHJJUVE9PSIsIm1hYyI6ImE5YmNiODljZjMzMTdmMDc4NjEwN2RjZTVkNzBmMWI0ZDQyN2YzODI5YjQxMzE4MWY0MmY0ZTQ1OGY4NTkyNWQifQ==\n',
                            'Content-Type': 'application/json'
                        }
                    }

                    await axios.post(
                        'https://frontend-test-assignment-api.abz.agency/api/v1/users',
                        formData,
                        axiosConfig
                    ).then(res => console.log('res', res))
                        .catch((e) => console.log(e))

                }}
            >

                {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      isValid,
                      setFieldValue,
                      handleSubmit,
                      dirty
                  }) => (

                    <Form method="post" encType="multipart-formData">
                        <Field type="text"
                               className="form__input"
                               name="name"
                               placeholder="Your name"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.name}
                        />
                        {touched.name && errors.name && <p style={{color: "red"}}>{errors.name}</p>}

                        <Field type="email"
                               className="form__input"
                               name="email"
                               placeholder="Email"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email}
                        />
                        {touched.email && errors.email && <p style={{color: "red"}}>{errors.email}</p>}

                        <Field type="text"
                               className="form__input"
                               name="phone"
                               placeholder="Phone"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.phone}
                        />
                        <span className="form__number">+38 (XXX) XXX - XX - XX</span>
                        {touched.phone && errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}

                        <label htmlFor="Select your position" className="form__subtitle">Select your position</label>

                        <div role="group" aria-labelledby="my-radio-group" className="form__radios">
                            <label>
                                <Field type="radio"
                                       name="position"
                                       value="Frontend developer"
                                       id="1"
                                       className="radio"
                                />
                                <span className="form__radio">Frontend developer</span>
                            </label>
                            <label>
                                <Field type="radio"
                                       name="position"
                                       value="Backend developer"
                                       id="2"
                                       className="radio"
                                />
                                <span className="form__radio">Backend developer</span>
                            </label>
                            <label>
                                <Field type="radio"
                                       name="position"
                                       value="Designer"
                                       id="3"
                                       className="radio"
                                />
                                <span className="form__radio">Designer</span>
                            </label>
                            <label>
                                <Field type="radio"
                                       name="position"
                                       value="QA"
                                       id="4"
                                       className="radio"
                                />
                                <span className="form__radio">QA</span>
                            </label>
                        </div>
                        {touched.position && errors.position && <p style={{color: "red"}}>{errors.position}</p>}

                        <label>
                            <span className="form__upload" >
                                <Field type="file"
                                       name="photo"
                                       className="form__photo"
                                       onChange={(event: any) => setFieldValue("photo", event.currentTarget.files[0].name)}
                                       value={values.photo}
                                />
                            </span>
                        </label>
                        {touched.photo && errors.photo && <p style={{color: "red"}}>{errors.photo}</p>}

                        <div>
                            <button type="submit"
                                    disabled={!isValid && !dirty}
                                    className="form__btn"
                            >
                                Sign up
                            </button>
                        </div>
                    </Form>

                )}
            </Formik>

        </div>
    )
}