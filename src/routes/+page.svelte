<script lang="ts">
	import { authClient } from '$lib/auth-client';
	const session = authClient.useSession();
</script>

<div>
	{#if $session.data}
		<div>
			<p>
				{$session?.data?.user.email}
			</p>
			<button
				on:click={async () => {
					await authClient.signOut();
				}}
			>
				Sign Out
			</button>
		</div>
	{:else}
		<button
			on:click={async () => {
				await authClient.signIn.magicLink({
					email: 'cesarmcristobal@gmail.com'
				});
			}}
		>
			Continue with email
		</button>
	{/if}
</div>
