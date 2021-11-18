import React, { useState, useEffect } from "react";
import { IoCheckmarkDoneSharp, IoHomeSharp } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import {
  HomeLink,
  FormContainer,
  Form,
  FormInput,
  FormButton,
  FormCheck,
  ImageCheck,
  ErrorForm,
} from "./EditForm.styled";
import axios from "axios";
import Swal from "sweetalert2";

const EditForm = () => {
  const playerAvatars = [
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177226/Futbol%20players/cristiano-ronaldo_zm5u9x.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177222/Futbol%20players/griezmann_vuq91e.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177218/Futbol%20players/harry-kane_aiihom.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177216/Futbol%20players/isco-alarcon_sg4oyg.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177211/Futbol%20players/luis-suarez_hgaslb.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177208/Futbol%20players/luka-modric_zx9gzn.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177204/Futbol%20players/lukaku_jvomvt.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177198/Futbol%20players/mbappe-1_cstw3v.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177194/Futbol%20players/messi_smr35u.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177188/Futbol%20players/mo-salah_uzsqpz.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177184/Futbol%20players/neymar_blhysd.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177180/Futbol%20players/paul-pogba_d4zls8.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177176/Futbol%20players/ramadel-falcao_ityyun.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177170/Futbol%20players/sergio-ramos_caea4j.png",
    "https://res.cloudinary.com/dy9tey0yi/image/upload/v1637177147/Futbol%20players/toni-kroos_bdjgub.png",
  ];

  const navigate = useNavigate();

  const { id } = useParams();
  const [input, setInput] = useState({});

  useEffect(() => {
    axios(`http://localhost:3001/player/${id}`).then((res) => {
      setInput(res.data);
      document.getElementById(res.data.status).checked = true;
      document.getElementById(res.data.avatar).checked = true
    });
  }, [id]);

  function validate(input) {
    let errors = {};

    if (!input.nickname) {
      errors.nickname = "A nickname is required";
    } else if (/[^A-Za-z0-9]+/.test(input.nickname)) {
      errors.nickname = "Only letters and numbers please";
    }
    if (!input.ranking) {
      errors.ranking = "A ranking position is required";
    } else if (
      !/^[0-9]*$/.test(input.ranking) ||
      input.ranking > 3000 ||
      input.ranking < 1
    ) {
      errors.ranking = "Ranking must be a number between 1-3000";
    }
    if (!input.status) {
      errors.status = "A status is required";
    }
    if (!input.avatar) {
      errors.avatar = "An avatar image is required";
    }
    return errors;
  }

  const [errors, setErrors] = useState({});

  function handleOnChange(e) {
    setInput({ ...input, [e.target.name]: e.target.value });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "put",
      url: "http://localhost:3001/player",
      data: {
        id: id,
        nickname: input.nickname,
        status: input.status,
        ranking: parseInt(input.ranking),
        avatar: input.avatar,
      },
    }).then((res) => {
      Swal.fire({
        title: "Success",
        text: "Player updated",
        icon: "success",
        confirmButtonText: "⚽",
      });
      navigate(`/player/${id}`);
    });
  };

  function handleOnCheck(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        [e.target.name]: e.target.value,
      });
      setErrors(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    }
  }

  let disabled = !(
    input.nickname &&
    input.status &&
    input.ranking &&
    input.avatar &&
    !errors.nickname &&
    !errors.status &&
    !errors.ranking &&
    !errors.avatar
  );

  return (
    <>
      <HomeLink to="/">
        <IoHomeSharp />
      </HomeLink>
      <FormContainer>
        <Form onSubmit={handleOnSubmit}>
          <FormInput
            name="nickname"
            placeholder="Choose a nickname..."
            autoComplete="off"
            value={input.nickname}
            onChange={handleOnChange}
          />
          {errors.nickname && <ErrorForm>{errors.nickname}</ErrorForm>}

          <FormInput
            name="ranking"
            placeholder="Ranking position (1-3000)"
            autoComplete="off"
            value={input.ranking}
            onChange={handleOnChange}
          />
          {errors.ranking && <ErrorForm>{errors.ranking}</ErrorForm>}

          <FormCheck>
            <label>
              <input
                type="radio"
                id="oro"
                name="status"
                value="oro"
                onChange={handleOnCheck}
              />
              Oro
            </label>
            <label>
              <input
                type="radio"
                id="plata"
                name="status"
                value="plata"
                onChange={handleOnCheck}
              />
              Plata
            </label>
            <label>
              <input
                type="radio"
                id="bronce"
                name="status"
                value="bronce"
                onChange={handleOnCheck}
              />
              Bronce
            </label>
          </FormCheck>
          {errors.status && <ErrorForm>{errors.status}</ErrorForm>}

          <FormCheck>
            {playerAvatars.map((avatar) => {
              return (
                <label>
                  <input
                    type="radio"
                    id={avatar}
                    name="avatar"
                    value={avatar}
                    onChange={handleOnCheck}
                  />
                  <ImageCheck src={avatar} />
                </label>
              );
            })}
          </FormCheck>
          {errors.avatar && <ErrorForm>{errors.avatar}</ErrorForm>}
          <FormButton type="submit" disabled={disabled}>
            <IoCheckmarkDoneSharp />
          </FormButton>
        </Form>
      </FormContainer>
    </>
  );
};

export default EditForm;
