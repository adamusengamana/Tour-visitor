import { Field, Input, Button, Stack, Box } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toaster } from "../components/ui/toaster";
import { Spinner } from '@chakra-ui/react';
import { useColorModeValue } from "../components/ui/color-mode";


function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [loadingLogin, setLoadingLogin] = useState(false);
  const [loadingRegister, setLoadingRegister] = useState(false);

  async function handleSubmit(e) {
    setLoadingLogin(true);
    e.preventDefault();

    try {
      setError("");
      if (!email || !password) {
        setError("This field is required");
      }
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });


      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        console.log('Login successful:', data);
        toaster.create({
          type: 'success',
          title: data.message || 'Login successful!',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        navigate('/');
      }


      else {
        toaster.create(
          {
            type: 'error',
            title: 'Login failed.',
            description: data.error || 'Please check your credentials.',
            status: 'error',
            duration: 3000,
            isClosable: true,
          });

      }
    }
    catch (error) {
      console.error('Login error:', error);

    } finally {
      setLoadingLogin(false);
    }
  }
  function handleRegister() {
    // Basic client-side validation before sending
    setError('');
    setLoadingRegister(true);
    if (!email || !password) {
      setError("This field is required");

    }


    fetch('http://localhost:5000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })
      .then(async response => {
        const data = await response.json();
        if (!response.ok) {
          toaster.error({
            title: 'Registration failed.',
            description: data.error,
            duration: 3000,
            isClosable: true
          })
        }
        else {
          toaster.success
            ({
              title: data.message,
              duration: 3000,
              isClosable: true
            })
        }
      })
      .catch(error => {
        toaster.error(
          {
            title: error.message

            , duration: 3000,
            isClosable: true
          });
      })
      .finally(() => {
        setLoadingRegister(false);
      });
  }
  const formBg = useColorModeValue('white', 'gray.800')
  const formShadow = useColorModeValue('md', 'dark-lg')
  const inputBg = useColorModeValue('white', 'gray.700')
  const inputBorder = useColorModeValue('gray.300', 'gray.600')
  const inputColor = useColorModeValue('gray.800', 'whiteAlpha.900')


  return (

    <Box as="form" onSubmit={handleSubmit} width={500} mx="auto" boxShadow={formShadow} p={6} mt={20} borderRadius="md" bg={formBg}>
      <Stack spacing={5}>
        <Field.Root invalid={!email && Boolean(error)}>
          <Field.Label>Email Address</Field.Label>
          <Input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            autoComplete="email"
            bg={inputBg}
            borderColor={inputBorder}
            color={inputColor}
            _placeholder={{ color: useColorModeValue('gray.400', 'gray.500') }}

          />
          <Field.ErrorText>{!email && error}</Field.ErrorText>
        </Field.Root>
        <Field.Root invalid={!password && Boolean(error)}>
          <Field.Label>Password</Field.Label>
          <Input
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            autoComplete="current-password"
            bg={inputBg}
            borderColor={inputBorder}
            color={inputColor}
            _placeholder={{ color: useColorModeValue('gray.400', 'gray.500') }}

          />
          <Field.ErrorText>{!password && error}</Field.ErrorText>
        </Field.Root >
        <Button type="submit" colorScheme="teal" _hover={{ bg: "teal.400" }}>
          {loadingLogin ? <Spinner size='sm' /> : 'Login'}

        </Button>
        <Button type="button" onClick={handleRegister} colorScheme="teal.200" _hover={{ bg: "teal.400" }}>
          {loadingRegister ? <Spinner size='sm' title="Registering" /> : 'Register'}
        </Button>
      </Stack>
    </Box>
  );
}

export default LoginForm;