import sys
import os
sys.path.insert(0, '..')
import traceback
from ml.inference import InferenceRunner
import asyncio

async def test():
    try:
        checkpoint = os.path.join(os.path.dirname(__file__), '..', 'checkpoints', 'final_model_37percent.zip')
        runner = InferenceRunner(checkpoint_path=checkpoint, grid_size=15, max_steps=200, use_real_env=True, step_delay=0.1)
        async for s in runner.run_episode():
            print('state ok')
            break
    except Exception as e:
        traceback.print_exc()

asyncio.run(test())
