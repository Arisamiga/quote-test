
(function () {
    Object.assign(HTMLCollection.prototype, {
        forEach(event) {
            Array.prototype.forEach.call(this, (element) => event(element));
        },
    });

    const selections = document.getElementsByClassName("selection")[0]
    const selectionData = document.getElementsByClassName("selection_items")[0]

    const Premade = {
        "Lear": {
            "Act 1": {
                "Scene 1": "WyJJIGhhdmUgc28gb2Z0ZW4gYmx1c2hlZCB0byBhY2tub3dsZWRnZSBoaW0iLCAiVGhlcmUgd2FzIGdvb2Qgc3BvcnQgYXQgaGlzIG1ha2luZywgYW5kIHRoZSB3aG9yZXNvbiBtdXN0IGJlIGFja25vd2xlZGdlZCIsICJLbm93IHRoYXQgd2UgaGF2ZSBkaXZpZGVkIGluIHRocmVlIG91ciBraW5nZG9tIGFuZCB0aXMgb3VyIGZhc3QgaW50ZW50IHRvIHNoYWtlIGFsbCBjYXJlcyBhbmQgYnVzaW5lc3MgZnJvbSB0aGlzIGFnZSIsICJXZSBoYXZlIHRoaXMgaG91ciBhIGNvbnN0YW50IHdpbGwgdG8gcHVibGlzaCBvdXIgZGF1Z2h0ZXIncyBzZXZlcmFsIGRvd2VycywgdGhhdCBmdXR1cmUgc3RyaWZlIG1heSBiZSBwcmV2ZW50ZWQgbm93IiwgIlNpciwgSSBsb3ZlIHlvdSBtb3JlIHRoYW4gd29yZHMgY2FuIHdpZWxkIHRoZSBtYXR0ZXIiLCAiSSBhbSBtYWRlIG9mIHRoYXQgc2VsZiBzYW1lIG1ldGFsIGFzIG15IHNpc3RlciIsICJOb3RoaW5nIHdpbGwgY29tZSBvZiBub3RoaW5nIiwgIkkgbG92ZSB5b3VyIG1hamVzdHkgYWNjb3JkaW5nIHRvIG15IGJvbmQiLCAiQ29tZSBub3QgYmV0d2VlbiB0aGUgZHJhZ29uIGFuZCBoaXMgd3JhdGgiLCAiT25seSB3ZSBzaGFsbCByZXRhaW4gdGhlIG5hbWUgYW5kIHRoZSBhZGRpdGlvbiBvZiB0aGUga2luZyIsICJUaGlua3N0IHRob3UgdGhhdCBkdXR5IHNoYWxsIGhhdmUgZHJlYWQgdG8gc3BlYWssIHdoZW4gcG93ZXIgdG8gZmxhdHRlcnkgYm93cz8iLCAiQmV0dGVyIHRob3UgaGFkJ3N0IG5vdCBiZWVuIGJvcm4gdGhhbiBub3QgdG8gaGF2ZSBwbGVhc2VkIG1lIGJldHRlciIsICJTaGUgaXMgaGVyc2VsZiBhIGRvd2VyeSwgZmFpcmVzdCBDb3JkZWxpYSwgdGhhdCBhcnQgbW9zdCByaWNoIGFtb25nIHBvb3IiLCAiU3VjaCB1bmNvbnN0YW50IHN0YXJ0cyBhcmUgd2UgbGlrZSB0byBoYXZlIGZyb20gaGltIGFzIHRoaXMgb2YgS2VudCdzIGJhbmlzaG1lbnQiLCAiV2UgbXVzdCBkbyBzb21ldGhpbmcgYW5kIGknIHRoZSBoZWF0Il0=",
                "Scene 2": "WyJUaG91LCBuYXR1cmUsIGFydCBteSBnb2RkZXNzIiwgIlRoZSBjdXJpb3NpdHkgb2YgbmF0aW9ucyB0byBkZXByaXZlIG1lLCBmb3IgdGhhdCBJIGFtIHNvbWUgdHdlbHZlIG9yIGZvdXJ0ZWVuIG1vb25zaGluZXMgbGFnIG9mIGEgYnJvdGhlcj8iLCAiV2hvIGluIHRoZSBsdXN0eSBzdGVhbHRoIG9mIG5hdHVyZSB0YWtlIG1vcmUgY29tcG9zaXRpb24gYW5kIGZpZXJjZSBxdWFsaXR5IHRoYW4gZG90aCwgd2l0aGluIGEgZHVsbCwgc3RhbGUsIHRpcmVkIGJlZCBnbyB0byB0aGUgY3JlYXRpbmcgYSB3aG9sZSB0cmliZSBvZiBmb3BzIGdvdCAndHdlZW4gYXNsZWVwIGFuZCB3YWtlPyIsICJOYXR1cmUgZmluZHMgaXRzZWxmIHNjb3VyZ2VkIGJ5IHRoZSBzZXF1ZW50IGVmZmVjdHM6Li4uYnJvdGhlcnMgZGl2aWRlOy4uLnRoZSBib25kIGNyYWNrZWQgJ3R3aXh0IHNvbiBhbmQgZmF0aGVyIiwgIlRoZSBraW5nIGZhbGxzIGZyb20gYmlhcyBvZiBuYXR1cmU7IHRoZXJlJ3MgZmF0aGVyIGFnYWluc3QgY2hpbGQiLCAiQSBicm90aGVyIG5vYmxlLCB3aG9zZSBuYXR1cmUgaXMgc28gZmFyIGZyb20gZG9pbmcgaGFybXMgdGhhdCBoZSBzdXNwZWN0cyBub25lIl0=",
                "Scene 3": "WyIiXQ==",
                "Scene 4": "WyJOb3cgQmFuaXNoZWQgS2VudCwgSWYgdGhvdSBjYW5zdCBzZXJ2ZSB3aGVyZSB0aG91IGRvc3Qgc3RhbmQgY29uZGVtbmVkIiwgIllvdXIgaGlnaG5lc3MgaXMgbm90IGVudGVydGFpbmVkIHdpdGggdGhhdCBjZXJlbW9uaW91cyBhZmZlY3Rpb24gYXMgeW91IHdlcmUgd29udCIsICJTaW5jZSBteSBsYWRpZXMgZ29pbmcgdG8gRnJhbmNlIHNpciwgdGhlIGZvb2wgaGF0aCBwaW5lZCBoaW0gYXdheSIsICJEb3N0IHRob3UgY2FsbCBtZSBmb29sIGJveT8uLi4gQWxsIHRoeSBvdGhlciB0aXRsZXMgdGhvdSBoYXN0IGdpdmVuIGF3YXkiLCAiVGhvdSBtYWRlc3QgdGh5IGRhdWdodGVycyB0aGV5IG1vdGhlcnMiLCAiSW50byBoZXIgd29tYiBjb252ZXkgc3RlcmlsaXR5Il0NCg==",
                "Scene 5": "WyJPIGxldCBtZSBub3QgYmUgbWFkLCBub3QgbWFkLCBzd2VldCBoZWF2ZW47IGtlZXAgbWUgaW4gdGVtcGVyOyBJIHdvdWxkIG5vdCBiZSBtYWQiLCAiSSB3aWxsIGZvcmdldCBteSBuYXR1cmUsIHNvIGtpbmQgYSBmYXRoZXIiXQ==",
            },
            "Act 2": {
                "Scene 1": "WyJIYXZlIHlvdSBoZWFyZCBvZiBubyBsaWtlbHkgd2FycyB0d2l4dCB0aGUgZHVrZXMgb2YgQWxiYW55IGFuZCBDb3Jud2FsbD8iLCAiVGhlIER1a2UgYmUgaGVyZSB0b25pZ2h0ISBUaGUgYmV0dGVyISBCZXN0ISBUaGlzIHdlYXZlcyBpdHNlbGYgcGVyZm9yY2UgaW50byBteSBidXNpbmVzcyIsICJJIHRvbGQgaGltIHRoZSByZXZlbmdpbmcgZ29kcyAnZ2FpbnN0IGJhcnJpY2FkZXMgZGlkIGFsbCB0aGVpciB0aHVuZGVycyBiZW5kOy4uLiBXaXRoIGhpcyBwcmVwYXJlZCBzd29yZCBoZSBjaGFyZ2VzIGhvbWUgbXkgdW5wcmVwYXJlZCBib2R5IiwgIk9mIG15IGxhbmQgbG95YWwgYW5kIG5hdHVyYWwgYm95LCBpdCdsbCB3b3JrIHRoZSBtZWFucyB0byBtYWtlIHRoZSBjYXBhYmxlIl0=",
                "Scene 2": "WyJZb3UgY29tZSB3aXRoIGxldHRlcnMgYWdhaW5zdCB0aGUga2luZyBhbmQgdGFrZSB2YW5pdHkgdGhlIHB1cHBldHMgcGFydCBhZ2FpbnN0IHRoZSByb3lhbHR5IG9mIGhlciBraW5nIiwgIkNhbGwgbm90IHRoZSBzdG9ja3MgZm9yIG1lOyBJIHNlcnZlIHRoZSBraW5nIE9uIHdob3NlIGVtcGxveW1lbnQgSSB3YXMgc2VudCB0byB5b3UuIFlvdSBzaGFsbCBkbyBzbWFsbCByZXNwZWN0LCBzaG93IHRvbyBib2xkIG1hbGljZSBhZ2FpbnN0IHRoZSBncmFjZSBhbmQgcGVyc29uIG9mIG15IG1hc3RlciwgU3RvY2tpbmcgaGlzIG1lc3NlbmdlciJd",
                "Scene 3": "WyIiXQ==",
                "Scene 4": "WyJUaGV5IGR1cnN0IG5vIGRvJ3QsIFRoZXkgY291bGQgbm90LCB3b3VsZCBub3QgZG8ndCwgdGlzIHdvcnNlIHRoYW4gbXVyZGVyIiwgIk8hIEhvdyB0aGlzIG1vdGhlciBzd2VsbHMgdXAgdG93YXJkcyBteSBoZWFydDsgSHlzdGVyaWNhIFBhc3Npbz8gRG93biB0aHkgY2xpbWJpbmcgc29ycm93IiwgIkxldCBnbyB0aHkgaG9sZCB3aGVuIGEgZ3JlYXQgd2hlZWwgcm9sbHMgZG93biBhIGhpbGwgbGVzdCBpdCBicmVhayB0aGV5IG5lY2sgd2hlbiBmb2xsb3dpbmcgaXQiLCAiV2UgYXJlIG5vdCBvdXJzZWx2ZXM7IHdoZW4gbmF0dXJlIGJlaW5nIG9wcHJlc3NlZCwgY29tbWFuZHMgdGhlIG1pbmQgdG8gc3VmZmVyIHdpdGggdGhlIGJvZHkiLCAiQmVsb3ZlZCBSZWdhbiwgdGh5IHNpc3RlcnMgbmF1Z2h0IiwgIkkgY2Fubm90IHRoaW5rIG15IHNpc3RlciBpbiB0aGUgbGVhc3Qgd291bGQgZmFpbCBoZXIgb2JsaWdhdGlvbiIsICJPIHNpciB5b3UgYXJlIG9sZC4uLiBZb3Ugc2hvdWxkIGJlIHJ1bGVkIGFuZCBsZWQgYnkgc29tZSBkaXNjcmV0aW9uIHRoYXQgc2VydmVkIHlvdXIgc3RhdGUgYmV0dGVyIHRoYW4geW91cnNlbGYiLCAiSSBwcmF5IHRoZWUgZmF0aGVyLCBiZWluZyB3ZWFrLCBzZWVtIHNvIiwgIlJhdGhlciBJIGFianVyZSBhbGwgcm9vdHMgYW5kIGNob29zZSB0byB3YWdlIGFnYWluc3QgdGhlIGVubWl0eSBvZiB0aGUgYWlyIiwgIkkgcHJpdGhlZSBkYXVnaHRlciwgZG8gbm90IG1ha2UgbWUgbWFkIiwgIk1hbidzIGxpZmUgaXMgYXMgY2hlYXAgYXMgYmVhc3RzIiwgIkEgcG9vciBvbGQgbWFuLCBhcyBmdWxsIG9mIGdyaWVmIGFzIGFnZSIsICJTaHV0IHlvdXIgZG9vcnMgbXkgbG9yZCwgdGlzIGEgd2lsZCBuaWdodCJd",
            },
            "Act 3": {
                "Scene 1": "WyJDb250ZW5kaW5nIHdpdGggdGhlIGZyZXRmdWwgZWxlbWVudDogQmlkcyB0aGUgd2luZHMgYmxvdyB0aGUgZWFydGggaW50byB0aGUgc2VhIiwgIkltcGV0dW91cyBibGFzdHMsIHdpdGggZXllbGVzcyByYWdlIiwgIlN0cml2ZXMgaW4gaGlzIGxpdHRsZSB3b3JsZCBvZiBtYW4gdG8gb3V0LXNjb3JuIHRoZSB0by1hbmQtZnJvIGNvbmZsaWN0aW5nIHdpbmQgYW5kIHJhaW4iLCAiZnJvbSBGcmFuY2UgdGhlcmUgY29tZXMgYSBwb3dlciBpbnRvIHRoaXMgc2NhdHRlcidkIGtpbmdkb207IHdobyBhbHJlYWR5LCB3aXNlIGluIG91ciBuZWdsaWdlbmNlLCBoYXZlIHNlY3JldCBmZWV0IGluIHNvbWUgb2Ygb3VyIGJlc3QgcG9ydHMiXQ==",
                "Scene 2": "WyJCbG93LCB3aW5kcywgYW5kIGNyYWNrIHlvdXIgY2hlZWtzISIsICJBbmQgdGhvdSwgYWxsLXNoYWtpbmcgdGh1bmRlciwgc21pdGUgZmxhdCB0aGUgdGhpY2sgcm90dW5kaXR5IG9mJyB0aGUgd29ybGQhIENyYWNrIG5hdHVyZSdzIG1vdWxkcywgYW4gZ2VybWVucyBzcGlsbCBhdCBvbmNlLCBUaGF0IG1ha2UgaW5ncmF0ZWZ1bCBtYW4hIiwgIkEgcG9vciwgaW5maXJtLCB3ZWFrLCBhbmQgZGVzcGlzZWQgb2xkIG1hbiIsICJIZSB0aGF0IGhhcyBhIGhvdXNlIHRvIHB1dCdzIGhlYWQgaW4gaGFzIGEgZ29vZCBoZWFkLXBpZWNlIiwgIkkgYW0gYSBtYW4gbW9yZSBzaW5uJ2QgYWdhaW5zdCB0aGFuIHNpbm5pbmciXQ==",
                "Scene 3": "WyJJIGxpa2Ugbm90IHRoaXMgdW5uYXR1cmFsIGRlYWxpbmcgd2hlbiBJIGRlc2lyZWQgdGhlaXIgbGVhdmUgdGhhdCBJIG1pZ2h0IHBpdHkgaGltLCB0aGV5IHRvb2sgZnJvbSBtZSB0aGUgdXNlIG9mIG15IG93biBob3VzZSwgY2hhcmdlZCBtZSwgb24gcGFpbiBvZiB0aGVpciBwZXJwZXR1YWwgZGlzcGxlYXN1cmUsIG5laXRoZXIgdG8gc3BlYWsgb2YgaGltLCBlbnRyZWF0IGZvciBoaW0sIG5vciBpbiBhbnkgd2F5IHN1c3RhaW4gaGltIiwgIklmIEkgZGllIGZvciBpdCwgYXMgbm8gbGVzcyBpcyB0aHJlYXRlbmVkIG1lLCB0aGUga2luZywgbXkgbWFzdGVyLCBtdXN0IGJlIHJlbGlldmVkIiwgIlRoZSB5b3VuZ2VyIHJpc2VzIHdoZW4gdGhlIG9sZCBkb3RoIGZhbGwiXQ==",
                "Scene 4": "WyJUaGlzIHRlbXBlc3Qgd2lsbCBub3QgZ2l2ZSBtZSBsZWF2ZSB0byBwb25kZXIgb24gdGhpbmdzIHdvdWxkIGh1cnQgbWUgbW9yZSIsICJPIHRoYXQgd2F5IG1hZG5lc3MgbGllczsgbGV0IG1lIHNodW4gdGhhdCwgbm8gbW9yZSBvZiB0aGF0IiwgIlBvb3IgbmFrZWQgd3JldGNoZXMuLi4gSSBoYXZlIHRhJ2VuIHRvbyBsaXR0bGUgY2FyZSBvZiB0aGlzIiwgIkV4cG9zZSB0aHlzZWxmIHRvIGZlZWwgd2hhdCB3cmV0Y2hlcyBmZWVsLCB0aGF0IHRob3UgbWF5ZXN0IHNoYWtlIHRoZSBzdXBlcmZsdXggdG8gdGhlbSBhbmQgc2hvdyB0aGUgaGVhdmVucyBtb3JlIGp1c3QiLCAiRGVhdGgsIHRyYWl0b3IhIE5vdGhpbmcgY291bGQgaGF2ZSBzdWJkdWVkIG5hdHVyZSB0byBzdWNoIGEgbG93bmVzcyBidXQgaGlzIHVua2luZCBkYXVnaHRlcnMiLCAiUHJpdGhlZSBudW5jbGUsIHRpcyBhIG5hdWdodHkgbmlnaHQgdG8gc3dpbSBpbiIsICJPdXIgZmxlc2ggYW5kIGJsb29kIG15IGxvcmQsIGlzIGdyb3duIHNvIHZpbGUgdGhhdCBpdCBkb3RoIGhhdGUgd2hhdCBnZXRzIGl0IiwgIk15IGR1dHkgY2Fubm90IHN1ZmZlciB0byBvYmV5IGluIGFsbCB5b3VyIGRhdWdodGVycycgaGFyZCBjb21tZW50cyJd",
                "Scene 5": "WyJJIHdpbGwgaGF2ZSBteSByZXZlbmdlIGVyZSBJIGxlYXZlIHRoaXMgaG91c2UiLCAiTyBIZWF2ZW5zISBUaGF0IHRoaXMgdHJlYXNvbiB3ZXJlIG5vdCwgb3Igbm90IEkgdGhlIGRldGVjdG9yIl0=",
                "Scene 6": "WyJBbGwgdGhlIHBvd2VyIG9mIGhpcyB3aXRzIGhhdmUgZ2l2ZW4gd2F5IHRvIGhpcyBpbXBhdGllbmNlIiwgIkFycmFpZ24gaGVyIGZpcnN0LCB0aXMgR29uZXJpbC4uLiBTaGUga2lja2VkIHRoZSBwb29yIGtpbmcsIGhlciBmYXRoZXIiLCAiTXkgdGVhcnMgYmVnaW4gdG8gdGFrZSBoaXMgcGFydCBzbyBtdWNoLCB0aGV5J2xsIG1hciBteSBjb3VudGVyZmVpdGluZyIsICJIb3cgbGlnaHQgYW5kIHBvcnRhYmxlIG15IHBhaW4gc2VlbXMgbm93IHdoZW4gdGhhdCB3aGljaCBtYWtlcyBtZSBiZW5kIG1ha2VzIHRoZSBraW5nIGJvdyJd",
                "Scene 7": "WyJUaGUgcmV2ZW5nZXMgd2UgYXJlIGJvdW5kIHRvIHRha2UgdXBvbiB5b3VyIHRyYWl0b3JvdXMgZmF0aGVyIGFyZSBub3QgZm9yIHlvdXIgYmVob2xkaW5nLi4uIG15IGVhcmwgb2YgR2xvdWNlc3RlciIsICJJIGFtIHlvdXIgaG9zdDsgd2l0aCByb2JiZXIncyBoYW5kcyBteSBob3NwaXRhYmxlIGZhdm91cnMgeW91IHNob3VsZCBub3QgcnVmZmxlIHRodXMiLCAiSGFuZyBoaW0gaW5zdGFudGx5ISBQbHVjayBvdXQgaGlzIGV5ZXMhIiwgIkkgYW0gdGllZCB0byB0aGUgc3Rha2UgYW5kIEkgbXVzdCBzdGFuZCB0aGUgY291cnNlIiwgIkkgd291bGQgbm90IHNlZSB0aHkgY3J1ZWwgbmFpbHMgcGx1Y2sgb3V0IGhpcyBwb29yIG9sZCBleWVzLCBub3IgdGh5IGZpZXJjZSBmYW5ncyBpbiBoaXMgYW5vaW50ZWQgZmxlc2ggc3RpY2sgYm9hcmlzaCBmYW5ncyIsICJJIHNoYWxsIHNlZSB0aGUgd2luZ2VkIHZlbmdlYW5jZSBvdmVydGFrZSBzdWNoIGNoaWxkcmVuIiwgIk91dCB2aWxlIGplbGx5ISBXaGVyZSBpcyB0aHkgbHVzdHJlIG5vdz8iLCAiTyBteSBmb2xsaWVzISBUaGVuIEVkZ2FyIHdhcyBhYnVzZWQ/IEtpbmQgZ29kcywgZm9yZ2l2ZSBtZSB0aGF0IGFuZCBwcm9zcGVyIGhpbSJd",
            },
            "Act 4": {
                "Scene 1": "WyJUaGUgd29yc3QgcmV0dXJucyB0byBsYXVnaHRlciIsICJNaWdodCBJIGJ1dCBsaXZlIHRvIHNlZSB0aHJlZSBpbiBteSB0b3VjaCwgSSdkIHNheSBJIGhhZCBteSBleWVzIGFnYWluIiwgIkFzIGZsaWVzIHRvIHdhbnRvbiBib3lzIGFyZSB3ZSB0byB0aGUgZ29kczsgdGhleSBraWxsIHVzIGZvciBzcG9ydCIsICJUaXMgdGhlIHRpbWUncyBwbGFndWUgaW4gd2hpY2ggbWFkbWVuIGxlYWQgdGhlIGJsaW5kIiwgIlNvIGRpc3RyaWJ1dGlvbiBzaG91bGQgdW5kbyBleGNlc3MsIGFuZCBlYWNoIG1hbiBoYXZlIGVub3VnaCIsICJJIGNhbm5vdCBkYXViIGl0IGZ1cnRoZXIiXQ==",
                "Scene 2": "WyJJdCBpcyB0aGUgY293aXNoIHRlcnJvciBvZiBoaXMgc3Bpcml0IHRoYXQgZGFyZXMgbm90IHVuZGVydGFrZSIsICJPaCwgdGhlIGRpZmZlcmVuY2Ugb2YgbWFuIGFuZCBtYW4hIFRvIHRoZWUgYSB3b21hbidzIHNlcnZpY2VzIGFyZSBkdWUuIE15IGZvb2wgdXN1cnBzIG15IGJlZCIsICJZb3UgYXJlIG5vdCB3b3J0aCB0aGUgZHVzdCB3aGljaCB0aGUgcnVkZSB3aW5kIGJsb3dzIGluIHlvdXIgZmFjZSIsICJUaWdlcnMsIG5vdCBkYXVnaHRlcnMsIHdoYXQgaGF2ZSB5b3UgcGVyZm9ybWVkPyJd",
                "Scene 3": "WyJBIHNvdmVyZWlnbiBzaGFtZSBzbyBlbGJvd3MgaGltLi4uIFRoZXNlIHRoaW5ncyBzdGluZyBoaXMgbWluZCBzbyB2ZW5vbW91c2x5IHRoYXQgYnVybmluZyBzaGFtZSBkZXRhaW5zIGhpbSBmcm9tIENvcmRlbGlhIiwgIlRoZXJlIHNoZSBzaG9vay4gVGhlIGhvbHkgd2F0ZXIgZnJvbSBoZXIgaGVhdmVubHkgZXllcywgYW5kIGNsYW1vciBtb2lzdGVuZWQiLCAiSXQgaXMgdGhlIHN0YXJzLCB0aGUgc3RhcnMgYWJvdmUgdXMsIGdvdmVybiBvdXIgY29uZGl0aW9ucyJd",
                "Scene 4": "WyJIZSB3YXMgbWV0IGV2ZW4gbm93IGFzIG1hZCBhcyB0aGUgdmV4ZWQgc2VhLCBzaW5naW5nIGFsb3VkLCBjcm93bmVkIHdpdGggcmFuayBmdW1pdGVyIGFuZCBmdXJyb3cgd2VlZHMiLCAiVGlzIGtub3duIGJlZm9yZS4gT3VyIHByZXBhcmF0aW9uIHN0YW5kcyBpbiBleHBlY3RhdGlvbiBvZiB0aGVtIiwgIk8gZGVhciBmYXRoZXIsIGl0IGlzIHRoeSBidXNpbmVzcyB0aGF0IEkgZ28gYWJvdXQiXQ==",
                "Scene 5": "WyJNYWRhbSwgd2l0aCBtdWNoIGFkby4gWW91ciBzaXN0ZXIgaXMgdGhlIGJldHRlciBzb2xkaWVyIiwgIk15IGxvcmQgaXMgZGVhZDsgRWRtdW5kIGFuZCBJIGhhdmUgdGFsa2VkLCBhbmQgbW9yZSBjb252ZW5pZW50IGlzIGhlIGZvciBteSBoYW5kIHRoYW4gZm9yIHlvdXIgbGFkeSdzIiwgIklmIHlvdSBkbyBjaGFuY2UgdG8gaGVhciBvZiB0aGF0IGJsaW5kIHRyYWl0b3IsIHByZWZlcm1lbnQgZmFsbHMgb24gaGltIHRoYXQgY3V0cyBoaW0gb2ZmIl0=",
                "Scene 6": "WyJXaHkgSSBkbyB0cmlmbGUgdGh1cyB3aXRoIGhpcyBkZXNwYWlyIGlzIGRvbmUgdG8gY3VyZSBpdCIsICJIZW5jZWZvcnRoLCBJJ2xsIGJlYXIgYWZmbGljdGlvbiB0aWxsIGl0IGRvIGNyeSBpdHNlbGYgb3V0IiwgIlRoZXkgZmxhdHRlcmVkIG1lIGxpa2UgYSBkb2cgYW5kIHRvbGQgbWUgSSBoYWQgd2hpdGUgaGFpcnMgaW4gbXkgYmVhcmQgZXJlIHRoZSBibGFjayBvbmVzIHdlcmUgdGhlcmUiLCAiTyBydWluZWQgcGllY2Ugb2YgbmF0dXJlISBUaGlzIGdyZWF0IHdvcmxkIHNoYWxsIHNvIHdlYXIgb3V0IHRvIG5hdWdodC4gRG9zdCB0aG91IGtub3cgbWU/IiwgIldoZW4gd2UgYXJlIGJvcm4gd2UgY3J5IHRoYXQgd2UgYXJlIGNvbWUgdG8gdGhpcyBncmVhdCBzdGFnZSBvZiBmb29scyIsICJCZXR0ZXIgSSB3ZXJlIGRpc3RyYWN0LCBzbyBzaG91bGQgbXkgdGhvdWdodHMgYmUgc2V2ZXJlZCBmcm9tIG15IGdyaWVmcyIsICJUaGF0IGV5ZWxlc3MgaGVhZCBvZiB0aGluZSB3YXMgZmlyc3QgZnJhbWVkIGZsZXNoIHRvIHJhaXNlIG15IGZvcnR1bmVzIiwgIkxldCBvdXIgcmVjaXByb2NhbCB2b3dzIGJlIHJlbWVtYmVyZWQuIFlvdSBoYXZlIG1hbnkgb3Bwb3J0dW5pdGllcyB0byBjdXQgaGltIG9mZi4gSWYgeW91ciB3aWxsIHdhbnQgbm90LCB0aW1lIGFuZCBwbGFjZSB3aWxsIGJlIGZydWl0ZnVsbHkgb2ZmZXJlZCIsICJPIGluZGlzdGluZ3Vpc2hlZCBzcGFjZSBvZiB3b21hbidzIHdpbGwhIEEgcGxvdCB1cG9uIGhlciB2aXJ0dW91cyBodXNiYW5kJ3MgbGlmZSwgYW5kIHRoZSBleGNoYW5nZSBteSBicm90aGVyISJd",
                "Scene 7": "WyJPIHRob3UgZ29vZCBrZW50LCBob3cgc2hhbGwgSSBsaXZlIGFuZCB3b3JrIHRvIG1hdGNoIHRoeSBnb29kbmVzcz8iLCAiVG8gYmUgYWNrbm93bGVkZ2VkLCBtYWRhbSwgaXMgbydlcnBhaWQiLCAiTyBteSBkZWFyIGZhdGhlciwgcmVzdG9yYXRpb24gaGFuZyB0aHkgbWVkaWNpbmUgb24gbXkgbGlwcywgYW5kIGxldCB0aGlzIGtpc3MgcmVwYWlyIHRob3NlIHZpb2xlbnQgaGFybXMgdGhhdCBteSB0d28gc2lzdGVycyBpbiB0aHkgcmV2ZXJlbmNlIG1hZGUhIl0=",
            },
            "Act 5": {
                "Scene 1": "WyJLbm93IG9mIHRoZSBkdWtlIGlmIGhpcyBsYXN0IHB1cnBvc2UgaG9sZCwgb3Igd2hldGhlciBzaW5jZSBoZSBpcyBhZHZpc2VkIGJ5IGF1Z2h0IHRvIGNoYW5nZSB0aGUgY291cnNlIiwgIkkgbmV2ZXIgc2hhbGwgZW5kdXJlIGhlci4gRGVhciBteSBsb3JkLCBiZSBub3QgZmFtaWxpYXIgd2l0aCBoZXIiLCAiSSBoYWQgcmF0aGVyIGxvc2UgdGhlIGJhdHRsZSB0aGFuIHRoYXQgc2lzdGVyIHNob3VsZCBsb29zZW4gaGltIGFuZCBtZSIsICJCZWZvcmUgeW91IGZpZ2h0IHRoZSBiYXR0bGUsIG9wZSB0aGlzIGxldHRlci4gSWYgeW91IGhhdmUgdmljdG9yeSwgbGV0IHRoZSB0cnVtcGV0IHNvdW5kIGZvciBoaW0gdGhhdCBicm91Z2h0IGl0IiwgIlRvIGJvdGggdGhlc2Ugc2lzdGVycyBoYXZlIEkgc3dvcm4gbXkgbG92ZSwgZWFjaCBqZWFsb3VzIG9mIHRoZSBvdGhlciBhcyB0aGUgc3R1bmcgYXMgb2YgdGhlIGFkZGVyLiBXaGljaCBvZiB0aGVtIHNoYWxsIEkgdGFrZT8gQm90aD8gT25lPyBPciBuZWl0aGVyPyIsICJXZSdsbCB1c2UgaGlzIGNvdW50ZW5hbmNlIGZvciB0aGUgYmF0dGxlLCB3aGljaCBiZWluZyBkb25lLCBsZXQgaGVyIHdobyB3b3VsZCBiZSByaWQgb2YgaGltIGRldmlzZSBoaXMgc3BlZWR5IHRha2luZyBvZmYiLCAiQXMgZm9yIHRoZSBtZXJjeSB3aGljaCBoZSBpbnRlbmRzIHRvIExlYXIgYW5kIENvcmRlbGlhLCB0aGUgYmF0dGxlIGRvbmUgYW5kIHRoZXkgd2l0aGluIG91ciBwb3dlciBzaGFsbCBuZXZlciBzZWUgaGlzIHBhcmRvbiwgZm9yIG15IHN0YXRlIHN0YW5kcyBvbiBtZSB0byBkZWZlbmQsIG5vdCB0byBkZWJhdGUiXQ==",
                "Scene 2": "WyIiXQ==",
                "Scene 3": "WyJLbm93IHRob3UgdGhpczogdGhhdCBtZW4gYXJlIGFzIHRoZSB0aW1lIGlzLiBUbyBiZSB0ZW5kZXIgbWluZGVkIGRvZXMgbm90IGJlY29tZSBhIHN3b3JkIiwgIldoZW4gdGhvdSBkb3N0IGFzayBtZSBibGVzc2luZywgSSdsbCBrbmVlbCBkb3duIGFuZCBhc2sgb2YgdGhlZSBmb3JnaXZlbmVzcy4uLiBBbmQgd2UnbGwgd2VhciBvdXQgaW4gYSB3YWxsZWQgcHJpc29uIHBhY2tzIGFuZCBzZWN0cyBvZiBncmVhdCBvbmVzIHRoYXQgZWJiIGFuZCBmbG93IGJ5IHRoZSBtb29uIiwgIlN0YXkgeWV0LiBIZWFyIFJlYXNvbi4gRWRtbnVuZCwgSSBhcnJlc3QgdGhlZSBvbiBjYXBpdGFsIHRyZWFzb24sIGFuZCBpbiB0aGluZSBhdHRhaW50LCB0aGlzIGdpbGRlZCBzZXJwZW50IiwgIlRoZSBnb2RzIGFyZSBqdXN0LCBhbmQgb2Ygb3VyIHBsZWFzYW50IHZpY2VzIG1ha2UgaW5zdHJ1bWVudHMgdG8gcGxhZ3VlIHVzIiwgIlRoZSB3aGVlbCBpcyBjb21lIGZ1bGwgY2lyY2xlLiBJIGFtIGhlcmUiLCAiWW91ciBsYWR5LCBzaXIsIHlvdXIgbGFkeS4gQW5kIGhlciBzaXN0ZXIgYnkgaGVyIGlzIHBvaXNvbmVkLiBTaGUgY29uZmVzc2VzIGl0IiwgIllldCBFZG11bmQgd2FzIGJlbG92ZWQuIFRoZSBvbmUgdGhlIG90aGVyIHBvaXNvbmVkIGZvciBteSBzYWtlLCBhbmQgYWZ0ZXIgc2xldyBoZXJzZWxmIiwgIkkgcGFudCBmb3IgbGlmZS4gU29tZSBnb29kIEkgbWVhbiB0byBkbyBkZXNwaXRlIG9mIG1pbmUgb3duIG5hdHVyZSIsICJXaHkgc2hvdWxkIGEgZG9nLCBhIGhvcnNlLCBhIHJhdCBoYXZlIGxpZmUsIGFuZCB0aG91IG5vIGJyZWF0aCBhdCBhbGw/IiwgIlZleCBub3QgaGlzIGdob3N0LiBPLCBsZXQgaGltIHBhc3MuIEhlIGhhdGVzIGhpbSB0aGF0IHdvdWxkIHVwb24gdGhlIHJhY2sgb2YgdGhpcyB0b3VnaCB3b3JsZCBzdHJldGNoIGhpbSBvdXQgbG9uZ2VyIiwgIlRoZSB3ZWlnaHQgb2YgdGhpcyBzYWQgdGltZSB3ZSBtdXN0IG9iZXkuIFNwZWFrIHdoYXQgd2UgZmVlbCwgbm90IHdoYXQgd2Ugb3VnaHQgdG8gc2F5Il0=",
            },
            "Misc.": {
                "ALL OF THEM": "WyJJIGhhdmUgc28gb2Z0ZW4gYmx1c2hlZCB0byBhY2tub3dsZWRnZSBoaW0iLCAiVGhlcmUgd2FzIGdvb2Qgc3BvcnQgYXQgaGlzIG1ha2luZywgYW5kIHRoZSB3aG9yZXNvbiBtdXN0IGJlIGFja25vd2xlZGdlZCIsICJLbm93IHRoYXQgd2UgaGF2ZSBkaXZpZGVkIGluIHRocmVlIG91ciBraW5nZG9tIGFuZCB0aXMgb3VyIGZhc3QgaW50ZW50IHRvIHNoYWtlIGFsbCBjYXJlcyBhbmQgYnVzaW5lc3MgZnJvbSB0aGlzIGFnZSIsICJXZSBoYXZlIHRoaXMgaG91ciBhIGNvbnN0YW50IHdpbGwgdG8gcHVibGlzaCBvdXIgZGF1Z2h0ZXIncyBzZXZlcmFsIGRvd2VycywgdGhhdCBmdXR1cmUgc3RyaWZlIG1heSBiZSBwcmV2ZW50ZWQgbm93IiwgIlNpciwgSSBsb3ZlIHlvdSBtb3JlIHRoYW4gd29yZHMgY2FuIHdpZWxkIHRoZSBtYXR0ZXIiLCAiSSBhbSBtYWRlIG9mIHRoYXQgc2VsZiBzYW1lIG1ldGFsIGFzIG15IHNpc3RlciIsICJOb3RoaW5nIHdpbGwgY29tZSBvZiBub3RoaW5nIiwgIkkgbG92ZSB5b3VyIG1hamVzdHkgYWNjb3JkaW5nIHRvIG15IGJvbmQiLCAiQ29tZSBub3QgYmV0d2VlbiB0aGUgZHJhZ29uIGFuZCBoaXMgd3JhdGgiLCAiT25seSB3ZSBzaGFsbCByZXRhaW4gdGhlIG5hbWUgYW5kIHRoZSBhZGRpdGlvbiBvZiB0aGUga2luZyIsICJUaGlua3N0IHRob3UgdGhhdCBkdXR5IHNoYWxsIGhhdmUgZHJlYWQgdG8gc3BlYWssIHdoZW4gcG93ZXIgdG8gZmxhdHRlcnkgYm93cz8iLCAiQmV0dGVyIHRob3UgaGFkJ3N0IG5vdCBiZWVuIGJvcm4gdGhhbiBub3QgdG8gaGF2ZSBwbGVhc2VkIG1lIGJldHRlciIsICJTaGUgaXMgaGVyc2VsZiBhIGRvd2VyeSwgZmFpcmVzdCBDb3JkZWxpYSwgdGhhdCBhcnQgbW9zdCByaWNoIGFtb25nIHBvb3IiLCAiU3VjaCB1bmNvbnN0YW50IHN0YXJ0cyBhcmUgd2UgbGlrZSB0byBoYXZlIGZyb20gaGltIGFzIHRoaXMgb2YgS2VudCdzIGJhbmlzaG1lbnQiLCAiV2UgbXVzdCBkbyBzb21ldGhpbmcgYW5kIGknIHRoZSBoZWF0IiwgICJUaG91LCBuYXR1cmUsIGFydCBteSBnb2RkZXNzIiwgIlRoZSBjdXJpb3NpdHkgb2YgbmF0aW9ucyB0byBkZXByaXZlIG1lLCBmb3IgdGhhdCBJIGFtIHNvbWUgdHdlbHZlIG9yIGZvdXJ0ZWVuIG1vb25zaGluZXMgbGFnIG9mIGEgYnJvdGhlcj8iLCAiV2hvIGluIHRoZSBsdXN0eSBzdGVhbHRoIG9mIG5hdHVyZSB0YWtlIG1vcmUgY29tcG9zaXRpb24gYW5kIGZpZXJjZSBxdWFsaXR5IHRoYW4gZG90aCwgd2l0aGluIGEgZHVsbCwgc3RhbGUsIHRpcmVkIGJlZCBnbyB0byB0aGUgY3JlYXRpbmcgYSB3aG9sZSB0cmliZSBvZiBmb3BzIGdvdCAndHdlZW4gYXNsZWVwIGFuZCB3YWtlPyIsICJOYXR1cmUgZmluZHMgaXRzZWxmIHNjb3VyZ2VkIGJ5IHRoZSBzZXF1ZW50IGVmZmVjdHM6Li4uYnJvdGhlcnMgZGl2aWRlOy4uLnRoZSBib25kIGNyYWNrZWQgJ3R3aXh0IHNvbiBhbmQgZmF0aGVyIiwgIlRoZSBraW5nIGZhbGxzIGZyb20gYmlhcyBvZiBuYXR1cmU7IHRoZXJlJ3MgZmF0aGVyIGFnYWluc3QgY2hpbGQiLCAiQSBicm90aGVyIG5vYmxlLCB3aG9zZSBuYXR1cmUgaXMgc28gZmFyIGZyb20gZG9pbmcgaGFybXMgdGhhdCBoZSBzdXNwZWN0cyBub25lIiwgIk5vdyBCYW5pc2hlZCBLZW50LCBJZiB0aG91IGNhbnN0IHNlcnZlIHdoZXJlIHRob3UgZG9zdCBzdGFuZCBjb25kZW1uZWQiLCAiWW91ciBoaWdobmVzcyBpcyBub3QgZW50ZXJ0YWluZWQgd2l0aCB0aGF0IGNlcmVtb25pb3VzIGFmZmVjdGlvbiBhcyB5b3Ugd2VyZSB3b250IiwgIlNpbmNlIG15IGxhZGllcyBnb2luZyB0byBGcmFuY2Ugc2lyLCB0aGUgZm9vbCBoYXRoIHBpbmVkIGhpbSBhd2F5IiwgIkRvc3QgdGhvdSBjYWxsIG1lIGZvb2wgYm95Py4uLiBBbGwgdGh5IG90aGVyIHRpdGxlcyB0aG91IGhhc3QgZ2l2ZW4gYXdheSIsICJUaG91IG1hZGVzdCB0aHkgZGF1Z2h0ZXJzIHRoZXkgbW90aGVycyIsICJJbnRvIGhlciB3b21iIGNvbnZleSBzdGVyaWxpdHkiLCAiTyBsZXQgbWUgbm90IGJlIG1hZCwgbm90IG1hZCwgc3dlZXQgaGVhdmVuOyBrZWVwIG1lIGluIHRlbXBlcjsgSSB3b3VsZCBub3QgYmUgbWFkIiwgIkkgd2lsbCBmb3JnZXQgbXkgbmF0dXJlLCBzbyBraW5kIGEgZmF0aGVyIiwgIkhhdmUgeW91IGhlYXJkIG9mIG5vIGxpa2VseSB3YXJzIHR3aXh0IHRoZSBkdWtlcyBvZiBBbGJhbnkgYW5kIENvcm53YWxsPyIsICJUaGUgRHVrZSBiZSBoZXJlIHRvbmlnaHQhIFRoZSBiZXR0ZXIhIEJlc3QhIFRoaXMgd2VhdmVzIGl0c2VsZiBwZXJmb3JjZSBpbnRvIG15IGJ1c2luZXNzIiwgIkkgdG9sZCBoaW0gdGhlIHJldmVuZ2luZyBnb2RzICdnYWluc3QgYmFycmljYWRlcyBkaWQgYWxsIHRoZWlyIHRodW5kZXJzIGJlbmQ7Li4uIFdpdGggaGlzIHByZXBhcmVkIHN3b3JkIGhlIGNoYXJnZXMgaG9tZSBteSB1bnByZXBhcmVkIGJvZHkiLCAiT2YgbXkgbGFuZCBsb3lhbCBhbmQgbmF0dXJhbCBib3ksIGl0J2xsIHdvcmsgdGhlIG1lYW5zIHRvIG1ha2UgdGhlIGNhcGFibGUiLCAiWW91IGNvbWUgd2l0aCBsZXR0ZXJzIGFnYWluc3QgdGhlIGtpbmcgYW5kIHRha2UgdmFuaXR5IHRoZSBwdXBwZXRzIHBhcnQgYWdhaW5zdCB0aGUgcm95YWx0eSBvZiBoZXIga2luZyIsICJDYWxsIG5vdCB0aGUgc3RvY2tzIGZvciBtZTsgSSBzZXJ2ZSB0aGUga2luZyBPbiB3aG9zZSBlbXBsb3ltZW50IEkgd2FzIHNlbnQgdG8geW91LiBZb3Ugc2hhbGwgZG8gc21hbGwgcmVzcGVjdCwgc2hvdyB0b28gYm9sZCBtYWxpY2UgYWdhaW5zdCB0aGUgZ3JhY2UgYW5kIHBlcnNvbiBvZiBteSBtYXN0ZXIsIFN0b2NraW5nIGhpcyBtZXNzZW5nZXIiLCAiVGhleSBkdXJzdCBubyBkbyd0LCBUaGV5IGNvdWxkIG5vdCwgd291bGQgbm90IGRvJ3QsIHRpcyB3b3JzZSB0aGFuIG11cmRlciIsICJPISBIb3cgdGhpcyBtb3RoZXIgc3dlbGxzIHVwIHRvd2FyZHMgbXkgaGVhcnQ7IEh5c3RlcmljYSBQYXNzaW8/IERvd24gdGh5IGNsaW1iaW5nIHNvcnJvdyIsICJMZXQgZ28gdGh5IGhvbGQgd2hlbiBhIGdyZWF0IHdoZWVsIHJvbGxzIGRvd24gYSBoaWxsIGxlc3QgaXQgYnJlYWsgdGhleSBuZWNrIHdoZW4gZm9sbG93aW5nIGl0IiwgIldlIGFyZSBub3Qgb3Vyc2VsdmVzOyB3aGVuIG5hdHVyZSBiZWluZyBvcHByZXNzZWQsIGNvbW1hbmRzIHRoZSBtaW5kIHRvIHN1ZmZlciB3aXRoIHRoZSBib2R5IiwgIkJlbG92ZWQgUmVnYW4sIHRoeSBzaXN0ZXJzIG5hdWdodCIsICJJIGNhbm5vdCB0aGluayBteSBzaXN0ZXIgaW4gdGhlIGxlYXN0IHdvdWxkIGZhaWwgaGVyIG9ibGlnYXRpb24iLCAiTyBzaXIgeW91IGFyZSBvbGQuLi4gWW91IHNob3VsZCBiZSBydWxlZCBhbmQgbGVkIGJ5IHNvbWUgZGlzY3JldGlvbiB0aGF0IHNlcnZlZCB5b3VyIHN0YXRlIGJldHRlciB0aGFuIHlvdXJzZWxmIiwgIkkgcHJheSB0aGVlIGZhdGhlciwgYmVpbmcgd2Vhaywgc2VlbSBzbyIsICJSYXRoZXIgSSBhYmp1cmUgYWxsIHJvb3RzIGFuZCBjaG9vc2UgdG8gd2FnZSBhZ2FpbnN0IHRoZSBlbm1pdHkgb2YgdGhlIGFpciIsICJJIHByaXRoZWUgZGF1Z2h0ZXIsIGRvIG5vdCBtYWtlIG1lIG1hZCIsICJNYW4ncyBsaWZlIGlzIGFzIGNoZWFwIGFzIGJlYXN0cyIsICJBIHBvb3Igb2xkIG1hbiwgYXMgZnVsbCBvZiBncmllZiBhcyBhZ2UiLCAiU2h1dCB5b3VyIGRvb3JzIG15IGxvcmQsIHRpcyBhIHdpbGQgbmlnaHQiLCAiQ29udGVuZGluZyB3aXRoIHRoZSBmcmV0ZnVsIGVsZW1lbnQ6IEJpZHMgdGhlIHdpbmRzIGJsb3cgdGhlIGVhcnRoIGludG8gdGhlIHNlYSIsICJJbXBldHVvdXMgYmxhc3RzLCB3aXRoIGV5ZWxlc3MgcmFnZSIsICJTdHJpdmVzIGluIGhpcyBsaXR0bGUgd29ybGQgb2YgbWFuIHRvIG91dC1zY29ybiB0aGUgdG8tYW5kLWZybyBjb25mbGljdGluZyB3aW5kIGFuZCByYWluIiwgImZyb20gRnJhbmNlIHRoZXJlIGNvbWVzIGEgcG93ZXIgaW50byB0aGlzIHNjYXR0ZXInZCBraW5nZG9tOyB3aG8gYWxyZWFkeSwgd2lzZSBpbiBvdXIgbmVnbGlnZW5jZSwgaGF2ZSBzZWNyZXQgZmVldCBpbiBzb21lIG9mIG91ciBiZXN0IHBvcnRzIiwgIkJsb3csIHdpbmRzLCBhbmQgY3JhY2sgeW91ciBjaGVla3MhIiwgIkFuZCB0aG91LCBhbGwtc2hha2luZyB0aHVuZGVyLCBzbWl0ZSBmbGF0IHRoZSB0aGljayByb3R1bmRpdHkgb2YnIHRoZSB3b3JsZCEgQ3JhY2sgbmF0dXJlJ3MgbW91bGRzLCBhbiBnZXJtZW5zIHNwaWxsIGF0IG9uY2UsIFRoYXQgbWFrZSBpbmdyYXRlZnVsIG1hbiEiLCAiQSBwb29yLCBpbmZpcm0sIHdlYWssIGFuZCBkZXNwaXNlZCBvbGQgbWFuIiwgIkhlIHRoYXQgaGFzIGEgaG91c2UgdG8gcHV0J3MgaGVhZCBpbiBoYXMgYSBnb29kIGhlYWQtcGllY2UiLCAiSSBhbSBhIG1hbiBtb3JlIHNpbm4nZCBhZ2FpbnN0IHRoYW4gc2lubmluZyIsICJJIGxpa2Ugbm90IHRoaXMgdW5uYXR1cmFsIGRlYWxpbmcgd2hlbiBJIGRlc2lyZWQgdGhlaXIgbGVhdmUgdGhhdCBJIG1pZ2h0IHBpdHkgaGltLCB0aGV5IHRvb2sgZnJvbSBtZSB0aGUgdXNlIG9mIG15IG93biBob3VzZSwgY2hhcmdlZCBtZSwgb24gcGFpbiBvZiB0aGVpciBwZXJwZXR1YWwgZGlzcGxlYXN1cmUsIG5laXRoZXIgdG8gc3BlYWsgb2YgaGltLCBlbnRyZWF0IGZvciBoaW0sIG5vciBpbiBhbnkgd2F5IHN1c3RhaW4gaGltIiwgIklmIEkgZGllIGZvciBpdCwgYXMgbm8gbGVzcyBpcyB0aHJlYXRlbmVkIG1lLCB0aGUga2luZywgbXkgbWFzdGVyLCBtdXN0IGJlIHJlbGlldmVkIiwgIlRoZSB5b3VuZ2VyIHJpc2VzIHdoZW4gdGhlIG9sZCBkb3RoIGZhbGwiLCAiVGhpcyB0ZW1wZXN0IHdpbGwgbm90IGdpdmUgbWUgbGVhdmUgdG8gcG9uZGVyIG9uIHRoaW5ncyB3b3VsZCBodXJ0IG1lIG1vcmUiLCAiTyB0aGF0IHdheSBtYWRuZXNzIGxpZXM7IGxldCBtZSBzaHVuIHRoYXQsIG5vIG1vcmUgb2YgdGhhdCIsICJQb29yIG5ha2VkIHdyZXRjaGVzLi4uIEkgaGF2ZSB0YSdlbiB0b28gbGl0dGxlIGNhcmUgb2YgdGhpcyIsICJFeHBvc2UgdGh5c2VsZiB0byBmZWVsIHdoYXQgd3JldGNoZXMgZmVlbCwgdGhhdCB0aG91IG1heWVzdCBzaGFrZSB0aGUgc3VwZXJmbHV4IHRvIHRoZW0gYW5kIHNob3cgdGhlIGhlYXZlbnMgbW9yZSBqdXN0IiwgIkRlYXRoLCB0cmFpdG9yISBOb3RoaW5nIGNvdWxkIGhhdmUgc3ViZHVlZCBuYXR1cmUgdG8gc3VjaCBhIGxvd25lc3MgYnV0IGhpcyB1bmtpbmQgZGF1Z2h0ZXJzIiwgIlByaXRoZWUgbnVuY2xlLCB0aXMgYSBuYXVnaHR5IG5pZ2h0IHRvIHN3aW0gaW4iLCAiT3VyIGZsZXNoIGFuZCBibG9vZCBteSBsb3JkLCBpcyBncm93biBzbyB2aWxlIHRoYXQgaXQgZG90aCBoYXRlIHdoYXQgZ2V0cyBpdCIsICJNeSBkdXR5IGNhbm5vdCBzdWZmZXIgdG8gb2JleSBpbiBhbGwgeW91ciBkYXVnaHRlcnMnIGhhcmQgY29tbWVudHMiLCAiSSB3aWxsIGhhdmUgbXkgcmV2ZW5nZSBlcmUgSSBsZWF2ZSB0aGlzIGhvdXNlIiwgIk8gSGVhdmVucyEgVGhhdCB0aGlzIHRyZWFzb24gd2VyZSBub3QsIG9yIG5vdCBJIHRoZSBkZXRlY3RvciIsICJBbGwgdGhlIHBvd2VyIG9mIGhpcyB3aXRzIGhhdmUgZ2l2ZW4gd2F5IHRvIGhpcyBpbXBhdGllbmNlIiwgIkFycmFpZ24gaGVyIGZpcnN0LCB0aXMgR29uZXJpbC4uLiBTaGUga2lja2VkIHRoZSBwb29yIGtpbmcsIGhlciBmYXRoZXIiLCAiTXkgdGVhcnMgYmVnaW4gdG8gdGFrZSBoaXMgcGFydCBzbyBtdWNoLCB0aGV5J2xsIG1hciBteSBjb3VudGVyZmVpdGluZyIsICJIb3cgbGlnaHQgYW5kIHBvcnRhYmxlIG15IHBhaW4gc2VlbXMgbm93IHdoZW4gdGhhdCB3aGljaCBtYWtlcyBtZSBiZW5kIG1ha2VzIHRoZSBraW5nIGJvdyIsICJUaGUgcmV2ZW5nZXMgd2UgYXJlIGJvdW5kIHRvIHRha2UgdXBvbiB5b3VyIHRyYWl0b3JvdXMgZmF0aGVyIGFyZSBub3QgZm9yIHlvdXIgYmVob2xkaW5nLi4uIG15IGVhcmwgb2YgR2xvdWNlc3RlciIsICJJIGFtIHlvdXIgaG9zdDsgd2l0aCByb2JiZXIncyBoYW5kcyBteSBob3NwaXRhYmxlIGZhdm91cnMgeW91IHNob3VsZCBub3QgcnVmZmxlIHRodXMiLCAiSGFuZyBoaW0gaW5zdGFudGx5ISBQbHVjayBvdXQgaGlzIGV5ZXMhIiwgIkkgYW0gdGllZCB0byB0aGUgc3Rha2UgYW5kIEkgbXVzdCBzdGFuZCB0aGUgY291cnNlIiwgIkkgd291bGQgbm90IHNlZSB0aHkgY3J1ZWwgbmFpbHMgcGx1Y2sgb3V0IGhpcyBwb29yIG9sZCBleWVzLCBub3IgdGh5IGZpZXJjZSBmYW5ncyBpbiBoaXMgYW5vaW50ZWQgZmxlc2ggc3RpY2sgYm9hcmlzaCBmYW5ncyIsICJJIHNoYWxsIHNlZSB0aGUgd2luZ2VkIHZlbmdlYW5jZSBvdmVydGFrZSBzdWNoIGNoaWxkcmVuIiwgIk91dCB2aWxlIGplbGx5ISBXaGVyZSBpcyB0aHkgbHVzdHJlIG5vdz8iLCAiTyBteSBmb2xsaWVzISBUaGVuIEVkZ2FyIHdhcyBhYnVzZWQ/IEtpbmQgZ29kcywgZm9yZ2l2ZSBtZSB0aGF0IGFuZCBwcm9zcGVyIGhpbSIsICJUaGUgd29yc3QgcmV0dXJucyB0byBsYXVnaHRlciIsICJNaWdodCBJIGJ1dCBsaXZlIHRvIHNlZSB0aHJlZSBpbiBteSB0b3VjaCwgSSdkIHNheSBJIGhhZCBteSBleWVzIGFnYWluIiwgIkFzIGZsaWVzIHRvIHdhbnRvbiBib3lzIGFyZSB3ZSB0byB0aGUgZ29kczsgdGhleSBraWxsIHVzIGZvciBzcG9ydCIsICJUaXMgdGhlIHRpbWUncyBwbGFndWUgaW4gd2hpY2ggbWFkbWVuIGxlYWQgdGhlIGJsaW5kIiwgIlNvIGRpc3RyaWJ1dGlvbiBzaG91bGQgdW5kbyBleGNlc3MsIGFuZCBlYWNoIG1hbiBoYXZlIGVub3VnaCIsICJJIGNhbm5vdCBkYXViIGl0IGZ1cnRoZXIiLCAiSXQgaXMgdGhlIGNvd2lzaCB0ZXJyb3Igb2YgaGlzIHNwaXJpdCB0aGF0IGRhcmVzIG5vdCB1bmRlcnRha2UiLCAiT2gsIHRoZSBkaWZmZXJlbmNlIG9mIG1hbiBhbmQgbWFuISBUbyB0aGVlIGEgd29tYW4ncyBzZXJ2aWNlcyBhcmUgZHVlLiBNeSBmb29sIHVzdXJwcyBteSBiZWQiLCAiWW91IGFyZSBub3Qgd29ydGggdGhlIGR1c3Qgd2hpY2ggdGhlIHJ1ZGUgd2luZCBibG93cyBpbiB5b3VyIGZhY2UiLCAiVGlnZXJzLCBub3QgZGF1Z2h0ZXJzLCB3aGF0IGhhdmUgeW91IHBlcmZvcm1lZD8iLCAiQSBzb3ZlcmVpZ24gc2hhbWUgc28gZWxib3dzIGhpbS4uLiBUaGVzZSB0aGluZ3Mgc3RpbmcgaGlzIG1pbmQgc28gdmVub21vdXNseSB0aGF0IGJ1cm5pbmcgc2hhbWUgZGV0YWlucyBoaW0gZnJvbSBDb3JkZWxpYSIsICJUaGVyZSBzaGUgc2hvb2suIFRoZSBob2x5IHdhdGVyIGZyb20gaGVyIGhlYXZlbmx5IGV5ZXMsIGFuZCBjbGFtb3IgbW9pc3RlbmVkIiwgIkl0IGlzIHRoZSBzdGFycywgdGhlIHN0YXJzIGFib3ZlIHVzLCBnb3Zlcm4gb3VyIGNvbmRpdGlvbnMiLCAiSGUgd2FzIG1ldCBldmVuIG5vdyBhcyBtYWQgYXMgdGhlIHZleGVkIHNlYSwgc2luZ2luZyBhbG91ZCwgY3Jvd25lZCB3aXRoIHJhbmsgZnVtaXRlciBhbmQgZnVycm93IHdlZWRzIiwgIlRpcyBrbm93biBiZWZvcmUuIE91ciBwcmVwYXJhdGlvbiBzdGFuZHMgaW4gZXhwZWN0YXRpb24gb2YgdGhlbSIsICJPIGRlYXIgZmF0aGVyLCBpdCBpcyB0aHkgYnVzaW5lc3MgdGhhdCBJIGdvIGFib3V0IiwgIk1hZGFtLCB3aXRoIG11Y2ggYWRvLiBZb3VyIHNpc3RlciBpcyB0aGUgYmV0dGVyIHNvbGRpZXIiLCAiTXkgbG9yZCBpcyBkZWFkOyBFZG11bmQgYW5kIEkgaGF2ZSB0YWxrZWQsIGFuZCBtb3JlIGNvbnZlbmllbnQgaXMgaGUgZm9yIG15IGhhbmQgdGhhbiBmb3IgeW91ciBsYWR5J3MiLCAiSWYgeW91IGRvIGNoYW5jZSB0byBoZWFyIG9mIHRoYXQgYmxpbmQgdHJhaXRvciwgcHJlZmVybWVudCBmYWxscyBvbiBoaW0gdGhhdCBjdXRzIGhpbSBvZmYiLCAiV2h5IEkgZG8gdHJpZmxlIHRodXMgd2l0aCBoaXMgZGVzcGFpciBpcyBkb25lIHRvIGN1cmUgaXQiLCAiSGVuY2Vmb3J0aCwgSSdsbCBiZWFyIGFmZmxpY3Rpb24gdGlsbCBpdCBkbyBjcnkgaXRzZWxmIG91dCIsICJUaGV5IGZsYXR0ZXJlZCBtZSBsaWtlIGEgZG9nIGFuZCB0b2xkIG1lIEkgaGFkIHdoaXRlIGhhaXJzIGluIG15IGJlYXJkIGVyZSB0aGUgYmxhY2sgb25lcyB3ZXJlIHRoZXJlIiwgIk8gcnVpbmVkIHBpZWNlIG9mIG5hdHVyZSEgVGhpcyBncmVhdCB3b3JsZCBzaGFsbCBzbyB3ZWFyIG91dCB0byBuYXVnaHQuIERvc3QgdGhvdSBrbm93IG1lPyIsICJXaGVuIHdlIGFyZSBib3JuIHdlIGNyeSB0aGF0IHdlIGFyZSBjb21lIHRvIHRoaXMgZ3JlYXQgc3RhZ2Ugb2YgZm9vbHMiLCAiQmV0dGVyIEkgd2VyZSBkaXN0cmFjdCwgc28gc2hvdWxkIG15IHRob3VnaHRzIGJlIHNldmVyZWQgZnJvbSBteSBncmllZnMiLCAiVGhhdCBleWVsZXNzIGhlYWQgb2YgdGhpbmUgd2FzIGZpcnN0IGZyYW1lZCBmbGVzaCB0byByYWlzZSBteSBmb3J0dW5lcyIsICJMZXQgb3VyIHJlY2lwcm9jYWwgdm93cyBiZSByZW1lbWJlcmVkLiBZb3UgaGF2ZSBtYW55IG9wcG9ydHVuaXRpZXMgdG8gY3V0IGhpbSBvZmYuIElmIHlvdXIgd2lsbCB3YW50IG5vdCwgdGltZSBhbmQgcGxhY2Ugd2lsbCBiZSBmcnVpdGZ1bGx5IG9mZmVyZWQiLCAiTyBpbmRpc3Rpbmd1aXNoZWQgc3BhY2Ugb2Ygd29tYW4ncyB3aWxsISBBIHBsb3QgdXBvbiBoZXIgdmlydHVvdXMgaHVzYmFuZCdzIGxpZmUsIGFuZCB0aGUgZXhjaGFuZ2UgbXkgYnJvdGhlciEiLCAiTyB0aG91IGdvb2Qga2VudCwgaG93IHNoYWxsIEkgbGl2ZSBhbmQgd29yayB0byBtYXRjaCB0aHkgZ29vZG5lc3M/IiwgIlRvIGJlIGFja25vd2xlZGdlZCwgbWFkYW0sIGlzIG8nZXJwYWlkIiwgIk8gbXkgZGVhciBmYXRoZXIsIHJlc3RvcmF0aW9uIGhhbmcgdGh5IG1lZGljaW5lIG9uIG15IGxpcHMsIGFuZCBsZXQgdGhpcyBraXNzIHJlcGFpciB0aG9zZSB2aW9sZW50IGhhcm1zIHRoYXQgbXkgdHdvIHNpc3RlcnMgaW4gdGh5IHJldmVyZW5jZSBtYWRlISIsICJLbm93IG9mIHRoZSBkdWtlIGlmIGhpcyBsYXN0IHB1cnBvc2UgaG9sZCwgb3Igd2hldGhlciBzaW5jZSBoZSBpcyBhZHZpc2VkIGJ5IGF1Z2h0IHRvIGNoYW5nZSB0aGUgY291cnNlIiwgIkkgbmV2ZXIgc2hhbGwgZW5kdXJlIGhlci4gRGVhciBteSBsb3JkLCBiZSBub3QgZmFtaWxpYXIgd2l0aCBoZXIiLCAiSSBoYWQgcmF0aGVyIGxvc2UgdGhlIGJhdHRsZSB0aGFuIHRoYXQgc2lzdGVyIHNob3VsZCBsb29zZW4gaGltIGFuZCBtZSIsICJCZWZvcmUgeW91IGZpZ2h0IHRoZSBiYXR0bGUsIG9wZSB0aGlzIGxldHRlci4gSWYgeW91IGhhdmUgdmljdG9yeSwgbGV0IHRoZSB0cnVtcGV0IHNvdW5kIGZvciBoaW0gdGhhdCBicm91Z2h0IGl0IiwgIlRvIGJvdGggdGhlc2Ugc2lzdGVycyBoYXZlIEkgc3dvcm4gbXkgbG92ZSwgZWFjaCBqZWFsb3VzIG9mIHRoZSBvdGhlciBhcyB0aGUgc3R1bmcgYXMgb2YgdGhlIGFkZGVyLiBXaGljaCBvZiB0aGVtIHNoYWxsIEkgdGFrZT8gQm90aD8gT25lPyBPciBuZWl0aGVyPyIsICJXZSdsbCB1c2UgaGlzIGNvdW50ZW5hbmNlIGZvciB0aGUgYmF0dGxlLCB3aGljaCBiZWluZyBkb25lLCBsZXQgaGVyIHdobyB3b3VsZCBiZSByaWQgb2YgaGltIGRldmlzZSBoaXMgc3BlZWR5IHRha2luZyBvZmYiLCAiQXMgZm9yIHRoZSBtZXJjeSB3aGljaCBoZSBpbnRlbmRzIHRvIExlYXIgYW5kIENvcmRlbGlhLCB0aGUgYmF0dGxlIGRvbmUgYW5kIHRoZXkgd2l0aGluIG91ciBwb3dlciBzaGFsbCBuZXZlciBzZWUgaGlzIHBhcmRvbiwgZm9yIG15IHN0YXRlIHN0YW5kcyBvbiBtZSB0byBkZWZlbmQsIG5vdCB0byBkZWJhdGUiLCAiS25vdyB0aG91IHRoaXM6IHRoYXQgbWVuIGFyZSBhcyB0aGUgdGltZSBpcy4gVG8gYmUgdGVuZGVyIG1pbmRlZCBkb2VzIG5vdCBiZWNvbWUgYSBzd29yZCIsICJXaGVuIHRob3UgZG9zdCBhc2sgbWUgYmxlc3NpbmcsIEknbGwga25lZWwgZG93biBhbmQgYXNrIG9mIHRoZWUgZm9yZ2l2ZW5lc3MuLi4gQW5kIHdlJ2xsIHdlYXIgb3V0IGluIGEgd2FsbGVkIHByaXNvbiBwYWNrcyBhbmQgc2VjdHMgb2YgZ3JlYXQgb25lcyB0aGF0IGViYiBhbmQgZmxvdyBieSB0aGUgbW9vbiIsICJTdGF5IHlldC4gSGVhciBSZWFzb24uIEVkbW51bmQsIEkgYXJyZXN0IHRoZWUgb24gY2FwaXRhbCB0cmVhc29uLCBhbmQgaW4gdGhpbmUgYXR0YWludCwgdGhpcyBnaWxkZWQgc2VycGVudCIsICJUaGUgZ29kcyBhcmUganVzdCwgYW5kIG9mIG91ciBwbGVhc2FudCB2aWNlcyBtYWtlIGluc3RydW1lbnRzIHRvIHBsYWd1ZSB1cyIsICJUaGUgd2hlZWwgaXMgY29tZSBmdWxsIGNpcmNsZS4gSSBhbSBoZXJlIiwgIllvdXIgbGFkeSwgc2lyLCB5b3VyIGxhZHkuIEFuZCBoZXIgc2lzdGVyIGJ5IGhlciBpcyBwb2lzb25lZC4gU2hlIGNvbmZlc3NlcyBpdCIsICJZZXQgRWRtdW5kIHdhcyBiZWxvdmVkLiBUaGUgb25lIHRoZSBvdGhlciBwb2lzb25lZCBmb3IgbXkgc2FrZSwgYW5kIGFmdGVyIHNsZXcgaGVyc2VsZiIsICJJIHBhbnQgZm9yIGxpZmUuIFNvbWUgZ29vZCBJIG1lYW4gdG8gZG8gZGVzcGl0ZSBvZiBtaW5lIG93biBuYXR1cmUiLCAiV2h5IHNob3VsZCBhIGRvZywgYSBob3JzZSwgYSByYXQgaGF2ZSBsaWZlLCBhbmQgdGhvdSBubyBicmVhdGggYXQgYWxsPyIsICJWZXggbm90IGhpcyBnaG9zdC4gTywgbGV0IGhpbSBwYXNzLiBIZSBoYXRlcyBoaW0gdGhhdCB3b3VsZCB1cG9uIHRoZSByYWNrIG9mIHRoaXMgdG91Z2ggd29ybGQgc3RyZXRjaCBoaW0gb3V0IGxvbmdlciIsICJUaGUgd2VpZ2h0IG9mIHRoaXMgc2FkIHRpbWUgd2UgbXVzdCBvYmV5LiBTcGVhayB3aGF0IHdlIGZlZWwsIG5vdCB3aGF0IHdlIG91Z2h0IHRvIHNheSJd",
            }

        }
    }

    function escapeHtml(text) {
        var map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#039;'
        };

        return text.replace(/[&<>"']/g, function (m) { return map[m]; });
    }

    function getCurrentQuotesEntered() {
        var quotes = document.getElementsByClassName("quote");
        var quoteArray = [];
        for (var i = 0; i < quotes.length; i++) {
            quoteArray.push(quotes[i].value);
        }
        return quoteArray;
    }

    function quoteModal(quotes, title) {
        const modal = document.getElementsByClassName("modal")[0];
        const modalContent = document.getElementsByClassName("modal-content")[0];
        modal.style.display = "block";
        modalContent.innerHTML = "";
        document.body.style.overflow = "hidden";
        let html = `
        <span class="close">&times;</span>
        <div class="modal_header">
            <h1>${title}</h1>
            <ul>
        `
            // console.log(quotes)
            quotes.forEach((quote, index) => {
                html += `
                <li id="quote-${index}">${quote}</li>
            `
            });

        html += `
            </ul>
        </div>
        Do you want to use these quotes? <span style="color:red;">This will overwrite the current quotes.</span>

        <div class="useQuotesButton">Use Template Quotes</div>
        <div class="addQuotesButton">+ Add to Existing Quotes</div>
        `
        modalContent.innerHTML = html;

        const modal_close = document.getElementsByClassName("close")[0]
        modal_close.addEventListener("click", () => {
            closeModal();
        });

        const useQuotesButton = document.getElementsByClassName("useQuotesButton")[0];
        useQuotesButton.addEventListener("click", () => {
            localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(quotes))));
            window.location.href = "index.html";
        });

        const addQuotesButton = document.getElementsByClassName("addQuotesButton")[0];
        addQuotesButton.addEventListener("click", () => {
            const currentQuotes = getCurrentQuotesEntered();
            const newQuotes = quotes;
            const currentQuotesArray = currentQuotes;
            const combinedQuotes = [...currentQuotesArray, ...newQuotes];
            localStorage.setItem("quotes", btoa(encodeURIComponent(JSON.stringify(combinedQuotes))));
            window.location.href = "index.html";
        });
    }

    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function saveCurrentOption(value) {
        // Make a cookie
        setCookie("currentOption", value, 1);
    }

    function setCurrentOption() {
        var currentOption = getCookie("currentOption");
        if (currentOption != null) {
            var selections = document.getElementsByClassName("selection")[0];
            selections.value = currentOption;

            // Trigger change event
            var event = new Event('change');
            selections.dispatchEvent(event);
        }
    }

    function closeModal() {
        document.body.style.overflow = "auto";
        const modal = document.getElementsByClassName("modal")[0];
        // Play fade in animation in reverse then hide the modal
        modal.style.animation = "fadeOut 0.5s";
        // When animation ends, hide the modal
        modal.addEventListener("animationend", (event) => {
            if (event.animationName === "fadeOut") {
                modal.style.display = "none";
                modal.style.animation = "";
            }
        });
    }



    function createPopup(buttons, type, content) {
        return new Promise((resolve) => {
            const popup = document.getElementById("popup")
            const button1 = document.getElementById("button1")
            const button2 = document.getElementById("button2")
            const button3 = document.getElementById("button3")
            const title = document.getElementById("popupTitle")
            const text = document.getElementById("popupText")
            const popupContent = document.getElementById("popupContent")
            popup.style.overflow = "auto"
            document.body.style.overflow = "hidden"
            if (buttons === "yn") {
                button1.style.display = "block"
                button2.style.display = "block"
                button1.innerHTML = "Yes"
                button2.innerHTML = "No"
                button1.addEventListener("click", () => {
                    resolve(true);
                    closePopup()
                });
                button2.addEventListener("click", () => {
                    resolve(false);
                    closePopup()
                });
            }
            else if (buttons === "ok") {
                button1.style.display = "block"
                button1.innerHTML = "OK"
                button1.addEventListener("click", () => {
                    resolve(true);
                    closePopup()
                })
            }
            else if (buttons === "blank") {
            }
            else if (buttons === "force") {
                button1.style.display = "block";
                button2.style.display = "block";
                button1.innerHTML = "OK";
                button2.innerHTML = "Complete Anyway";
                button1.addEventListener("click", () => {
                    resolve(false)
                    closePopup();
                })
                button2.addEventListener("click", () => {
                    resolve(true);
                    closePopup();
                })
            }
            else {
                button1.style.display = "block"
                button1.innerHTML = "debug: Invalid Button Type!!"
            }

            if (type === "info") {
                title.innerHTML = "ℹ️ Information"
                title.style.color = "#67f5ff"
            }
            else if (type === "caution") {
                title.innerHTML = "⚠️Caution";
                title.style.color = "#ffdf77";
            }
            else if (type === "warning") {
                title.innerHTML = "❗ Warning";
                title.style.color = "#cd1000"
            }
            else if (type === "error") {
                title.innerHTML = "❗ Error";
                title.style.color = "#cd1000";
            }
            else {
                title.innerHTML = type;
            }
            text.innerHTML = content;
            popup.style.display = "block"
            window.addEventListener("click", (event) => {
                if (event.target == popup) {
                    closePopup();
                }
            }
            )
            const closeBtn = document.getElementById("closePopup")
            function closePopup() {
                popup.style.overflow = "hidden";
                popupContent.style.animation = "contentOut 0.6s";
                popup.style.animation = "bgOut 0.6s";
                popup.addEventListener("animationend", (event) => {
                    if (event.animationName === "bgOut") {
                        popup.style.display = "none"
                        button1.style.display = "none";
                        button2.style.display = "none";
                        button3.style.display = "none";
                        popup.style.animation = "";
                        popupContent.style.animation = "";
                        document.body.style.overflow = "auto";
                    }
                })
            }
            closeBtn.addEventListener("click", () => {
                closePopup()
            })
        });
    }





    selections.addEventListener("change", (event) => {
        const selectedOption = event.target.value;

        // selectionData.innerHTML = "";

        saveCurrentOption(selectedOption);

        if (selectedOption === "default") {
            selectionData.style.minHeight = `0px`;
            selectionData.style.maxHeight = `0px`;
        }

        if (selectedOption === "More") {
            selectionData.style.minHeight = `60px`;
            selectionData.style.maxHeight = `60px`;
            selectionData.innerText = "More Options are coming soon...";
        }

        if (selectedOption === "Lear") {
            let html = "";
            const premadeOption = "Lear"
            for (var act in Premade[premadeOption]) {
                html += `
                <div class='headline'>
                    <h1>${act}</h1>
                </div>
                `
                html += `
                <div class='content'>
                    <div class='grid'>
                    `
                for (var scene in Premade[premadeOption][act]) {
                    if (JSON.parse(decodeURIComponent(atob(Premade[premadeOption][act][scene])))[0] === "") {
                        html += `
                        <div class='grid_item'>${scene} [EMPTY]</div>
                        `

                    }
                    else {
                        html += `
                        <div class='grid_item'>${scene}</div>
                        `
                    }
                }
                html += `
                    </div>
                </div>
                `
            }
            selectionData.innerHTML = html;

            let estimatedHeight = document.getElementsByClassName("selection_items")[0].scrollHeight;
            selectionData.style.minHeight = `${estimatedHeight}px`;
            selectionData.style.maxHeight = `${estimatedHeight}px`;

            window.addEventListener('resize', function () {
                selectionData.style.minHeight = `unset`;
                selectionData.style.maxHeight = `unset`;
                let estimatedHeight = document.getElementsByClassName("selection_items")[0].scrollHeight;
                selectionData.style.minHeight = `${estimatedHeight}px`;
                selectionData.style.maxHeight = `${estimatedHeight}px`;
            });
        }
        if (selectedOption == "Own") {
            var data = localStorage.getItem("collections") ?? null;
            var html;

            if (data != null && Object.entries(JSON.parse(decodeURIComponent(atob(data)))).length > 0) {
                const collections = JSON.parse(decodeURIComponent(atob(data)));
                html = `
            <h2> Your Saved Quotes</h2>
            <h5> Note: Collections with the same name added will be <span style="color:#cd1000;">overwritten.</span> </h5>
            <div class="collections">
            `
                for (var collection in collections) {
                    html += `
                <div class="collection-container">
                    <div class="collection" id="${collection}">
                        ${collection}
                        <hr>
                        <ul>
                        <li>Date: ${collections[collection].date}</li>
                        <li>Quotes: ${collections[collection].quotes.length}</li>
                        </ul>
                    </div>
                    <button class="collectionDelete">🗑️ Delete</button>
                </div>
                `
                }
                html += `
            </div>
            <div class="saveQuotes">Save Current Quotes</div>
            <div class="importCollection">📥 Import Collection</div>


            `
            }
            else {
                html = `
            <h2> You Currently Dont have any Quotes Saved! </h2>
            <div class="saveQuotes">Save Current Quotes</div>
            <div class="importCollection">📥 Import Collection</div>








            `
            }
            selectionData.innerHTML = html;
            // let estimatedHeight = ;
            // Create estimatedHeight based on newlines
            let estimatedHeight = html.split("\n").length * 25;
            selectionData.style.minHeight = `${estimatedHeight}px`;
            selectionData.style.maxHeight = `${estimatedHeight}px`;

            const saveCurrentQuotes = document.getElementsByClassName("saveQuotes")[0]

            saveCurrentQuotes.addEventListener("click", (event) => {
                const modal = document.getElementsByClassName("modal")[0];
                const modalContent = document.getElementsByClassName("modal-content")[0];
                modal.style.display = "block";
                document.body.style.overflow = "hidden";
                modalContent.innerHTML = "";
                let html = `
            
            <span class="close">&times;</span>
            <div class="modal_header">

            <span>Name: </span><input class="collectionName" placeholder="Name of Collection"> 

                <h2>Current Quotes:</h2>
                <ul>
            `
                var quotes = document.getElementsByClassName("quote");
                var quoteArray = [];
                for (var i = 0; i < quotes.length; i++) {
                    quoteArray.push(quotes[i].value);
                    html += `
                <li id="quote-${i}">${quotes[i].value}</li>
                `
                };
                html += `
                </ul>
            </div>
            <hr>
    
            <div class="saveToDisabled saveTo">Save to "📖My Quotes"</div>
            `
                modalContent.innerHTML = html;
                const inputName = document.getElementsByClassName("collectionName")[0]
                inputName.addEventListener("input", (event) => {
                    const saveButton = document.getElementsByClassName("saveTo")[0]
                    // console.log(inputName.value)

                    // Add a limit of 100 characters
                    if (inputName.value.length > 100) {
                        inputName.value = inputName.value.slice(0, 100);
                    }

                    if (inputName.value.trim() == "") {
                        saveButton.innerText = 'Save to "📖My Quotes"';
                        saveButton.classList.add("saveToDisabled")
                        return;
                    }
                    saveButton.innerText = 'Save to "📖My Quotes" as "' + inputName.value + '"'
                    saveButton.classList.remove("saveToDisabled")
                });

                const saveButton = document.getElementsByClassName("saveTo")[0]
                saveButton.addEventListener("click", async (event) => {
                    if (saveButton.classList.contains("saveToDisabled")) {
                        return;
                    }
                    const collectionName = inputName.value;

                    const dataCollections = localStorage.getItem("collections") ?? null;

                    var collections;
                    if (dataCollections == null) {
                        collections = {};
                    }
                    else {
                        collections = JSON.parse(decodeURIComponent(atob(dataCollections)))
                    }

                    // Check if collection already exists
                    if (collections[collectionName] != null) {
                        if (!await createPopup("yn", "warning", "Collection already exists. Overwrite?")) {
                            return;
                        }
                    }
                    // createPopup("yn", "warning", "Collection already exists. Overwrite?") == true

                    collections[collectionName] = {
                        quotes: quoteArray,
                        date: new Date().toLocaleDateString()
                    }
                    localStorage.setItem("collections", btoa(encodeURIComponent(JSON.stringify(collections))));
                    window.location.href = "index.html";
                });

                const modal_close = document.getElementsByClassName("close")[0]
                modal_close.addEventListener("click", () => {
                    closeModal();
                });
            })

            const importCollection = document.getElementsByClassName("importCollection")[0];
            importCollection.addEventListener("click", (event) => {
                const modal = document.getElementsByClassName("modal")[0];
                const modalContent = document.getElementsByClassName("modal-content")[0];
                modal.style.display = "block";
                modalContent.innerHTML = "";
                document.body.style.overflow = "hidden";
                let html = `
            <span class="close">&times;</span>
            <div class="modal_header">
                <h1>Import Collection</h1>
                Copy and paste the collection data below:
                <textarea id="import"></textarea>
                <div class="importCollection" id="importBtn">📥 Import Collection</div>
            </div>
            `
                modalContent.innerHTML = html;
                const modal_close = document.getElementsByClassName("close")[0]
                modal_close.addEventListener("click", () => {
                    closeModal();
                });

                const importCollection = document.getElementById("importBtn");
                importCollection.addEventListener("click", async (event) => {
                    const textarea = document.getElementById("import");
                    try {
                        const decodedString = atob(textarea.value);
                        const decodedURIComponent = decodeURIComponent(decodedString);
                        collection = JSON.parse(decodedURIComponent);
                    } catch (error) {
                        // Handle the error
                        return createPopup("ok", "error", "Invalid Collection Data!");
                    }
                    const dataCollections = localStorage.getItem("collections") ?? null;

                    if (textarea.value.trim() == "") return;

                    if (collection.name == null || collection.quotes == null || collection.date == null) {
                        createPopup("ok", "error", "Invalid Collection Data!");
                        return;
                    }

                    var collections;
                    if (dataCollections == null) {
                        collections = {};
                    }
                    else {
                        collections = JSON.parse(decodeURIComponent(atob(dataCollections)))
                    }

                    // Check if collection already exists
                    if (collections[collection.name] != null) {
                        if (!await createPopup("yn", "warning", "Collection already exists. Overwrite?")) {
                            return;
                        }
                    }

                    collections[collection.name] = {
                        quotes: collection.quotes,
                        date: collection.date
                    }
                    localStorage.setItem("collections", btoa(encodeURIComponent(JSON.stringify(collections))));
                    window.location.href = "index.html";
                });
            });


            if (data != null && Object.entries(JSON.parse(decodeURIComponent(atob(data)))).length > 0) {
                document.getElementsByClassName("collection").forEach((element) => {
                    element.addEventListener("click", (event) => {
                        var collections = JSON.parse(decodeURIComponent(atob(data)));
                        quoteModal(collections[element.id].quotes, element.id);
                        const modalContent = document.getElementsByClassName("modal-content")[0];

                        var newElement = document.createElement('div');
                        newElement.className = 'exportCollection';
                        newElement.textContent = '📁 Export Collection';

                        modalContent.appendChild(newElement);

                        const exportCollection = document.getElementsByClassName("exportCollection")[0];
                        exportCollection.addEventListener("click", (event) => {
                            const collection = {
                                name: element.id,
                                quotes: collections[element.id].quotes,
                                date: collections[element.id].date
                            };
                            // Create new modal with base64 encoded data
                            const modal = document.getElementsByClassName("modal")[0];
                            const modalContent = document.getElementsByClassName("modal-content")[0];
                            modal.style.display = "block";
                            modalContent.innerHTML = "";
                            document.body.style.overflow = "hidden";
                            let html = `
                        <span class="close">&times;</span>
                        <div class="modal_header">
                            <h1>Exporting Collection: ${element.id}</h1>

                            Copy the following and use the "Import Collection" button to import this collection later:
                        </div>
                        <div class="exportData">
                            <textarea id="export" readonly>${btoa(encodeURIComponent(JSON.stringify(collection)))}</textarea>
                            <div class="copyToClipboard">📋 Copy to Clipboard</div>
                        </div>
                        `
                            modalContent.innerHTML = html;
                            const modal_close = document.getElementsByClassName("close")[0]
                            modal_close.addEventListener("click", () => {
                                closeModal();
                            });
                            const copyToClipboard = document.getElementsByClassName("copyToClipboard")[0];
                            copyToClipboard.addEventListener("click", (event) => {
                                const textarea = document.getElementById("export");
                                textarea.select();
                                if (!navigator.clipboard) {
                                    // use old commandExec() way
                                    var copyText = textarea;
                                    copyText.select();
                                    document.execCommand("copy");
                                } else {
                                    navigator.clipboard.writeText(textarea.value);
                                }
                            });

                        });
                    });
                });
                document.getElementsByClassName("collectionDelete").forEach((element) => {
                    element.addEventListener("click", (event) => {
                        var collections = JSON.parse(decodeURIComponent(atob(data)));
                        delete collections[element.previousElementSibling.id];
                        localStorage.setItem("collections", btoa(encodeURIComponent(JSON.stringify(collections))));
                        window.location.href = "index.html";
                    });
                });
            }
        }

    });

    selectionData.addEventListener("click", (event) => {
        const element = event.target;

        if (element.classList.contains("grid_item")) {
            const scene = element.textContent.trim();
            const act = event.target.parentElement.parentElement.previousElementSibling.textContent.trim();
            const topic = selections[selections.selectedIndex].textContent;
            const data = Premade.Lear[act][scene];

            if (data !== undefined) {
                quoteModal(JSON.parse(decodeURIComponent(atob(data))), `${topic} | ${act} ${scene} Quotes`);
            }
        }
    });

    window.onload = function () {
        setCurrentOption();
    }
})();