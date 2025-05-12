// next.config.js
import NextAuth from "next-auth";
import { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: import('next').NextConfig = {
  experimental: {
    // appDir: true // Removed as it is not a valid property
  },
  reactStrictMode: true
};

module.exports = nextConfig;
