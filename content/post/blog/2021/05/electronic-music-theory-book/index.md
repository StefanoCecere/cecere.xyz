---
title: "Electronic Music Theory Book"
slug: electronic-music-theory-book
subtitle: ""
summary: ""
categories: [blog]
tags: [music]
date: 2021-05-07T23:51:42+02:00
featured: false
draft: false
image:
  caption: ""
  focal_point: ""
  preview_only: false
projects: []
---

amici della computer #music, musica elettronica e interattiva, amanti del suono, matematica e teoria dei segnali... facendo ordine ho ritrovato questa piccola bibbia sulla Musica Elettronica, scritta niente popodimeno che da Miller Puckette (MIT Media Lab e poi IRCAM dove creò Pure Data da cui è stato poi sviluppato Max/MSP). da giovane ho lavorato molto in questo mondo che consiglio a chiunque voglia approfondire la Musica Interattiva.
come tutti i grandi, il libro è una risorsa free per tutti (online html o PDF) a questo indirizzo: http://msp.ucsd.edu/techniques.htm

se spulciate il suo ito, troverete anche tutti i video dei corsi che ha tenuti negli ultimi anni, tra cui:

- Compositional algorithms
- Musical Acoustics
- Survey of Electronic Music Techniques II
- Computer Music
- Real-time computer music software design
- Feedback and Distortion
- Stored and Live Control Streams for Real-time Electronic Music
- Fourier analysis, synthesis, and processing
- The voice as musical instrument
- Inside Pure Data
- Analysis of Musical Sound
- Compositional algorithms
trascrivo qui l'indice del libro giusto per stuzzicare i ricercatori. 

### Sinusoids, amplitude and frequency
- Measures of Amplitude
- Units of Amplitude
- Controlling Amplitude
- Frequency
- Synthesizing a sinusoid
- Superposing Signals
- Periodic Signals
- About the Software Examples
  - Quick Introduction to Pd
  - How to find and run the examples 
- Examples
  - Constant amplitude scaler
  - Amplitude control in decibels
  - Smoothed amplitude control with an envelope generator
  - Major triad
  - Conversion between frequency and pitch
  - More additive synthesis 

### Wavetables and samplers
- The Wavetable Oscillator
- Sampling
- Enveloping samplers
- Timbre stretching
- Interpolation
- Examples
  - Wavetable oscillator
  - Wavetable lookup in general
  - Using a wavetable as a sampler
  - Looping samplers
  - Overlapping sample looper
  - Automatic read point precession 

### Audio and control computations
- The sampling theorem
- Control
- Control streams
- Converting from audio signals to numeric control streams
- Control streams in block diagrams
- Event detection
- Audio signals as control
- Operations on control streams
- Control operations in Pd
- Examples
  - Sampling and foldover
  - Converting controls to signals
  - Non-looping wavetable player
  - Signals to controls
  - Analog-style sequencer
  - MIDI-style synthesizer 

### Automation and voice management
- Envelope Generators
- Linear and Curved Amplitude Shapes
- Continuous and discontinuous control changes
  - Muting
  - Switch-and-ramp 
- Polyphony
- Voice allocation
- Voice tags
- Encapsulation in Pd
- Examples
  - ADSR envelope generator
  - Transfer functions for amplitude control
  - Additive synthesis: Risset's bell
  - Additive synthesis: spectral envelope control
  - Polyphonic synthesis: sampler 

### Modulation
- Taxonomy of spectra
- Multiplying audio signals
- Waveshaping
- Frequency and phase modulation
- Examples
  - Ring modulation and spectra
  - Octave divider and formant adder
  - Waveshaping and difference tones
  - Waveshaping using Chebychev polynomials
  - Waveshaping using an exponential function
  - Sinusoidal waveshaping: evenness and oddness
  - Phase modulation and FM 

### Designer spectra
- Carrier/modulator model
- Pulse trains
  - Pulse trains via waveshaping
  - Pulse trains via wavetable stretching
  - Resulting spectra 
- Movable ring modulation
- Phase-aligned formant (PAF) generator
- Examples
  - Wavetable pulse train
  - Simple formant generator
  - Two-cosine carrier signal
  - The PAF generator
  - Stretched wavetables 

### Time shifts and delays
- Complex numbers
  - Complex sinusoids 
- Time shifts and phase changes
- Delay networks
- Recirculating delay networks
- Power conservation and complex delay networks
- Artificial reverberation
  - Controlling reverberators 
- Variable and fractional shifts
- Fidelity of interpolating delay lines
- Pitch shifting
- Examples
  - Fixed, noninterpolating delay line
  - Recirculating comb filter
  - Variable delay line
  - Order of execution and lower limits on delay times
  - Order of execution in non-recirculating delay lines
  - Non-recirculating comb filter as octave doubler
  - Time-varying complex comb filter: shakers
  - Reverberator
  - Pitch shifter 

### Filters
- Taxonomy of filters
  - Low-pass and high-pass filters
  - Band-pass and stop-band filters
  - Equalizing filters 
- Elementary filters
  - Elementary non-recirculating filter
  - Non-recirculating filter, second form
  - Elementary recirculating filter
  - Compound filters
  - Real outputs from complex filters
  - Two recirculating filters for the price of one 
- Designing filters
  - One-pole low-pass filter
  - One-pole, one-zero high-pass filter
  - Shelving filter
  - Band-pass filter
  - Peaking and stop-band filter
  - Butterworth filters
  - Stretching the unit circle with rational functions
  - Butterworth band-pass filter
  - Time-varying coefficients
  - Impulse responses of recirculating filters
  - All-pass filters 
- Applications
  - Subtractive synthesis
  - Envelope following
  - Single Sideband Modulation 
- Examples
  - Prefabricated low-, high-, and band-pass filters
  - Prefabricated time-varying band-pass filter
  - Envelope followers
  - Single sideband modulation
  - Using elementary filters directly: shelving and peaking
  - Making and using all-pass filters 
### Fourier analysis and resynthesis
- Fourier analysis of periodic signals
  - Periodicity of the Fourier transform
  - Fourier transform as additive synthesis 
- Properties of Fourier transforms
  - Fourier transform of DC
  - Shifts and phase changes
  - Fourier transform of a sinusoid 
- Fourier analysis of non-periodic signals
- Fourier analysis and reconstruction of audio signals
  - Narrow-band companding
  - Timbre stamping (classical vocoder) 
- Phase
  - Phase relationships between channels 
- Phase bashing
- Examples
  - Fourier analysis and resynthesis in Pd
  - Narrow-band companding: noise suppression
  - Timbre stamp ("vocoder")
  - Phase vocoder time bender 
  - 
### Classical waveforms
- Symmetries and Fourier series
  - Sawtooth waves and symmetry 
- Dissecting classical waveforms
- Fourier series of the elementary waveforms
  - Sawtooth wave
  - Parabolic wave
  - Square and symmetric triangle waves
  - General (non-symmetric) triangle wave 
- Predicting and controlling foldover
  - Over-sampling
  - Sneaky triangle waves
  - Transition splicing 
- Examples
  - Combining sawtooth waves
  - Strategies for band-limiting sawtooth waves