import { execSync, spawn } from 'child_process';
import waitOn from 'wait-on';

async function start() {
  try {
    console.log('🚀 Starting Docker containers...');
    execSync('docker compose up -d', { stdio: 'inherit' });

    console.log('⏳ Waiting for Postgres and Redis...');
    await waitOn({ resources: ['tcp:5432', 'tcp:6379'] });

    console.log('✅ Services are ready. Starting Turbo dev...');
    const devProcess = spawn('turbo', ['run', 'dev'], { stdio: 'inherit' });

    process.on('SIGINT', cleanup);
    process.on('SIGTERM', cleanup);

    function cleanup() {
      console.log('\n🧹 Cleaning up...');
      execSync('docker compose down', { stdio: 'inherit' });
      process.exit();
    }
  } catch (err) {
    console.error('❌ Failed to start:', err);
    process.exit(1);
  }
}

start();